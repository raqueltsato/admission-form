import { ThemeProvider } from "styled-components";
import TextField from "./";
import { within, render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import theme from "~/theme";

interface WrapperProps {
  initialValue: string;
}

const onChangeMock = jest.fn();

const Wrapper = ({ initialValue }: WrapperProps) => {
  return (
    <ThemeProvider theme={theme}>
      <TextField
        label="Nome"
        value={initialValue}
        onChange={(e) => onChangeMock(e.target.value)}
      />
    </ThemeProvider>
  );
};

describe("TextField", () => {
  it("Should show TextField with initial value", () => {
    const { container } = render(<Wrapper initialValue="João Silva" />);

    expect(within(container).getByText("Nome")).toBeDefined();
    expect(container.children[1]).toHaveValue("João Silva");
  });

  it("Should change TextField value", () => {
    render(<Wrapper initialValue="Mario Costa" />);

    let inputValue = screen.getByTestId("text-field");

    expect(inputValue).toHaveValue("Mario Costa");

    fireEvent.change(inputValue, { target: { value: "João Silva" } });

    inputValue = screen.getByTestId("text-field");

    expect(onChangeMock).toHaveBeenCalledWith("João Silva");
  });
});
