import { ThemeProvider } from "styled-components";
import Button from "./";
import { render, screen } from "@testing-library/react";
import theme from "~/theme";

describe("Button", () => {
  it("Should show button", () => {
    render(
      <ThemeProvider theme={theme}>
        <Button>Ativar</Button>
      </ThemeProvider>
    );
    expect(screen.getByRole("button", { name: /ativar/i }));
  });
});
