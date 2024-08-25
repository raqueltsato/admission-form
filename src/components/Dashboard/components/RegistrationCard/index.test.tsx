import RegistrationCard from "./";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useContext } from "react";
import { RegistrationContext } from "~/context/useRegistrationContext";
import { registrationsMock } from "~/mocks";
import GlobalProvider from "~/providers";
import { Status } from "~/core/api/types";

const updateMockFn = jest.fn();
const deleteMockFn = jest.fn();

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  const { actions, values } = useContext(RegistrationContext);

  return (
    <RegistrationContext.Provider
      value={{
        values: {
          ...values,
          registrations: registrationsMock as (typeof values)["registrations"],
        },
        actions: {
          ...actions,
          updateRegistrationHook: updateMockFn,
          deleteRegistrationHook: deleteMockFn,
        },
      }}
    >
      {children}
    </RegistrationContext.Provider>
  );
};

describe("RegistrationCard", () => {
  it("Should show registration", async () => {
    render(
      <GlobalProvider>
        <Wrapper>
          <RegistrationCard
            registration={registrationsMock[0]}
            key={registrationsMock[0].id}
          />
        </Wrapper>
      </GlobalProvider>
    );

    expect(screen.getByText("Juliana Mendes")).toBeDefined();
  });

  it("Should change registrarion status to REVIEW", async () => {
    render(
      <GlobalProvider>
        <Wrapper>
          <RegistrationCard
            registration={registrationsMock[0]}
            key={registrationsMock[0].id}
          />
        </Wrapper>
      </GlobalProvider>
    );
    const reviewButton = screen.getByTestId("review-button");

    fireEvent.click(reviewButton);

    const modal = screen.getByTestId("modal-overlay");
    const confirmButton = screen.getByTestId("modal-confirm-button");

    expect(modal).toBeDefined();
    expect(confirmButton).toBeDefined();

    fireEvent.click(confirmButton);

    expect(updateMockFn).toHaveBeenCalledWith({
      ...registrationsMock[0],
      status: Status.review,
    });
  });

  it("Should change registrarion status to APPROVED", async () => {
    render(
      <GlobalProvider>
        <Wrapper>
          <RegistrationCard
            registration={registrationsMock[1]}
            key={registrationsMock[1].id}
          />
        </Wrapper>
      </GlobalProvider>
    );
    const approveButton = screen.getByTestId("approve-button");

    fireEvent.click(approveButton);

    const modal = screen.getByTestId("modal-overlay");
    const confirmButton = screen.getByTestId("modal-confirm-button");

    expect(modal).toBeDefined();
    expect(confirmButton).toBeDefined();

    fireEvent.click(confirmButton);

    expect(updateMockFn).toHaveBeenCalledWith({
      ...registrationsMock[1],
      status: Status.approved,
    });
  });

  it("Should delete registrarion", async () => {
    render(
      <GlobalProvider>
        <Wrapper>
          <RegistrationCard
            registration={registrationsMock[0]}
            key={registrationsMock[0].id}
          />
        </Wrapper>
      </GlobalProvider>
    );
    const reviewButton = screen.getByTestId("delete-button");

    fireEvent.click(reviewButton);

    const modal = screen.getByTestId("modal-overlay");
    const confirmButton = screen.getByTestId("modal-confirm-button");

    expect(modal).toBeDefined();
    expect(confirmButton).toBeDefined();

    fireEvent.click(confirmButton);

    expect(deleteMockFn).toHaveBeenCalledWith("8");
  });
});
