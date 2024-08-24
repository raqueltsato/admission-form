import { ThemeProvider } from "styled-components";
import Toast, { showToast } from "./";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import theme from "~/theme";
import { act } from "react";

describe("Toast", () => {
  it("Should show and close the toast", () => {
    render(
      <ThemeProvider theme={theme}>
        <Toast />
      </ThemeProvider>
    );

    act(() =>
      showToast({
        variant: "error",
        message: "Erro ao listar registros.",
      })
    ),
      expect(screen.getByText(/erro ao listar registro/i)).toBeDefined();

    const closeToast = screen.getByTestId("close-toast");

    act(() => fireEvent.click(closeToast));

    expect(screen.getByTestId("toast-wrapper")).toHaveStyle("opacity: 0");
  });
});
