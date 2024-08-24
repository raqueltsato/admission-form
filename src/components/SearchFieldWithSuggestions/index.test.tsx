import SearchFieldWithSuggestions from "./";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useContext, useState } from "react";
import { RegistrationContext } from "~/context/useRegistrationContext";
import { registrationsMock } from "~/mocks";
import GlobalProvider from "~/providers";

const Wrapper = () => {
  const [value] = useState("");
  const { actions, values } = useContext(RegistrationContext);

  return (
    <RegistrationContext.Provider
      value={{
        values: {
          ...values,
          registrations: registrationsMock as (typeof values)["registrations"],
        },
        actions,
      }}
    >
      <SearchFieldWithSuggestions label="CPF" value={value} />
    </RegistrationContext.Provider>
  );
};

describe("SearchFieldWithSuggestions", () => {
  it("Should show suggestions when type on input", async () => {
    render(
      <GlobalProvider>
        <Wrapper />
      </GlobalProvider>
    );

    expect(screen.queryAllByText(/52/i).length).toEqual(0);

    const searchInput = screen.getByTestId("input-masked");

    fireEvent.change(searchInput, { target: { value: "52" } });

    const suggestions = screen.queryAllByText(/52/i);

    expect(suggestions.length).toEqual(2);
  });
});
