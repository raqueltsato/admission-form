import { useState } from "react";
import { ThemeProvider } from "styled-components";
import MaskedField from "./";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import theme from "~/theme";

interface WrapperProps {
  initialValue: string;
}

const Wrapper = ({ initialValue }: WrapperProps) => {
  const [value, setValue] = useState(initialValue);

  return (
    <ThemeProvider theme={theme}>
      <MaskedField
        label="Digite o CPF"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </ThemeProvider>
  );
};

const value = "56642105087";
const maskedValue = "566.421.050-87";

describe("MaskedField", () => {
  it("Should show MaskedField", async () => {
    render(<Wrapper initialValue={value} />);

    expect(screen.getByText(/digite o cpf/i)).toBeDefined();
    expect(screen.getByDisplayValue(maskedValue)).toBeDefined();
  });

  it("Should change MaskedField value", async () => {
    render(<Wrapper initialValue={value} />);

    const input = screen.getByTestId("input-masked");

    expect(screen.getByDisplayValue(maskedValue)).toBeDefined();

    fireEvent.change(input, { target: { value: "111.111.111-11" } });

    expect(input).toHaveValue("111.111.111-11");
  });
});
