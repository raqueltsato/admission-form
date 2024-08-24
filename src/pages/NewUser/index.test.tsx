import NewUser from "./";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act, useContext } from "react";
import { RegistrationContext } from "~/context/useRegistrationContext";
import GlobalProvider from "~/providers";
import { createBrowserHistory } from "history";

import { Router } from "react-router-dom";

const createRegistrationMockFn = jest.fn();

const Wrapper = () => {
  const { actions, values } = useContext(RegistrationContext);

  return (
    <RegistrationContext.Provider
      value={{
        values,
        actions: {
          ...actions,
          createRegistrationHook: createRegistrationMockFn,
        },
      }}
    >
      <NewUser />
    </RegistrationContext.Provider>
  );
};

describe("NewUser", () => {
  it("Should create new registration", async () => {
    render(
      <Router history={createBrowserHistory()}>
        <GlobalProvider>
          <Wrapper />
        </GlobalProvider>
      </Router>
    );

    const name = screen.getByPlaceholderText("Nome");
    const email = screen.getByPlaceholderText("E-mail");
    const cpf = screen.getByPlaceholderText("CPF");
    const date = screen.getByTestId("date");

    expect(name).toBeDefined();
    expect(email).toBeDefined();
    expect(cpf).toBeDefined();
    expect(date).toBeDefined();

    fireEvent.change(name, { target: { value: "Ana Silva" } });
    fireEvent.change(email, { target: { value: "ana@email.com" } });
    fireEvent.change(cpf, { target: { value: "41648756077" } });
    fireEvent.change(date, { target: { value: "2024-01-01" } });

    expect(screen.getByText("Cadastrar novo funcionário")).toBeDefined();

    const registerButton = screen.getByTestId("register-button");

    expect(registerButton).toBeDefined();

    fireEvent.click(registerButton);
    const confirmButton = screen.getByTestId("modal-confirm-button");

    expect(confirmButton).toBeDefined();

    await act(() => fireEvent.click(confirmButton));

    expect(createRegistrationMockFn).toHaveBeenCalledWith({
      admissionDate: "01/01/2024",
      email: "ana@email.com",
      employeeName: "Ana Silva",
      status: "REVIEW",
      cpf: "41648756077",
    });
  });

  it("Should throw errors in new registration form", async () => {
    render(
      <Router history={createBrowserHistory()}>
        <GlobalProvider>
          <Wrapper />
        </GlobalProvider>
      </Router>
    );

    const name = screen.getByPlaceholderText("Nome");
    const email = screen.getByPlaceholderText("E-mail");
    const cpf = screen.getByPlaceholderText("CPF");
    const date = screen.getByTestId("date");

    expect(name).toBeDefined();
    expect(email).toBeDefined();
    expect(cpf).toBeDefined();
    expect(date).toBeDefined();

    fireEvent.change(name, { target: { value: "Ana" } });
    fireEvent.change(email, { target: { value: "ana@email.com" } });
    fireEvent.change(cpf, { target: { value: "11111111111" } });
    fireEvent.change(date, { target: { value: "2024-01-01" } });

    expect(screen.getByText("Cadastrar novo funcionário")).toBeDefined();

    const registerButton = screen.getByTestId("register-button");

    expect(registerButton).toBeDisabled();
  });
});
