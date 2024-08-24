import { ThemeProvider } from "styled-components";
import MaskedField from "./";
import { render, screen } from "@testing-library/react";
import theme from "~/theme";

const value = "56642105087";

const maskedValue = "566.421.050-87";

describe("MaskedField", () => {
  it("Should show MaskedField", async () => {
    render(
      <ThemeProvider theme={theme}>
        <MaskedField label="Digite o CPF" value={value} />
      </ThemeProvider>
    );
    expect(screen.getByText(/digite o cpf/i)).toBeDefined();
    expect(screen.getByDisplayValue(maskedValue)).toBeDefined();
  });
});
