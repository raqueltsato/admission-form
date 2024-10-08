import { ThemeProvider } from "styled-components";
import Header from "./";
import { render, screen } from "@testing-library/react";
import theme from "~/theme";

describe("Header", () => {
  it("Should show Header", () => {
    render(
      <ThemeProvider theme={theme}>
        <Header title="Caju Front Teste" />
      </ThemeProvider>
    );
    expect(screen.getByText(/caju front teste/i)).toBeDefined();
  });
});
