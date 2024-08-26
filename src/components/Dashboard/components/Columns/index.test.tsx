import Columns from "./";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useContext } from "react";
import { RegistrationContext } from "~/context/useRegistrationContext";
import { registrationsMock } from "~/mocks";
import GlobalProvider from "~/providers";

const Wrapper = () => {
  const { actions, values } = useContext(RegistrationContext);

  return (
    <RegistrationContext.Provider
      value={{
        values: {
          ...values,
          isLoadingRegistrations: false,
          registrations: registrationsMock as (typeof values)["registrations"],
        },
        actions,
      }}
    >
      <Columns />
    </RegistrationContext.Provider>
  );
};

describe("Columns", () => {
  it("Should show registrations", async () => {
    render(
      <GlobalProvider>
        <Wrapper />
      </GlobalProvider>
    );

    expect(screen.getAllByTestId("registration-card").length).toEqual(4);
  });
});
