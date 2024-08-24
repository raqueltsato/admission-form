import { ThemeProvider } from "styled-components";
import IconButton from "./";
import { fireEvent, render, screen } from "@testing-library/react";
import theme from "~/theme";
import { HiOutlineArrowLeft } from "react-icons/hi";

const onChangeEvent = jest.fn();

describe("IconButton", () => {
  it("Should show IconButton", () => {
    render(
      <ThemeProvider theme={theme}>
        <IconButton onClick={onChangeEvent}>
          <HiOutlineArrowLeft size={24} />
        </IconButton>
      </ThemeProvider>
    );
    const buttonElement = screen.getByRole("button");
    fireEvent.click(buttonElement);
    expect(onChangeEvent).toBeDefined();
  });
});
