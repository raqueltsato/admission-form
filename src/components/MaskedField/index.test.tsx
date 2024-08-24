import { ThemeProvider } from "styled-components";
import MaskedField from "./";
import { render, screen } from "@testing-library/react";
import theme from "~/theme";

describe("MaskedField", () => {
  it("Should show MaskedField", async () => {
    render(
      <ThemeProvider theme={theme}>
        <MaskedField label="Digite o CPF" mask="999.999.999-99" />
      </ThemeProvider>
    );
    expect(screen.getByText(/digite o cpf/i));
  });
});
