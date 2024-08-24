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
    const { container } = render(<Wrapper initialValue="Luis" />);

    expect(within(container).getByText("Nome")).toBeDefined();
    expect(container.children[0].children[1]).toHaveValue("Luis");
  });

  it("Should change TextField value", () => {
    render(<Wrapper initialValue="Luis" />);

    let inputValue = screen.getByTestId("text-field");

    expect(inputValue).toHaveValue("Luis");

    fireEvent.change(inputValue, { target: { value: "João" } });

    inputValue = screen.getByTestId("text-field");

    expect(onChangeMock).toHaveBeenCalledWith("João");
  });
});
