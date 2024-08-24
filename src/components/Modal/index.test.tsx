import { ThemeProvider } from "styled-components";
import Modal from "./";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import theme from "~/theme";
import { useState } from "react";

describe("Modal", () => {
  const handleSubmit = jest.fn();
  const toggleModal = jest.fn();

  const Wrapper = () => {
    const [isOpen, setIsOpen] = useState(true);
    const onDismiss = () => {
      setIsOpen(false);
      toggleModal();
    };

    return (
      <ThemeProvider theme={theme}>
        <Modal
          isOpen={isOpen}
          title="Cadastrar novo funcionário"
          onDismiss={onDismiss}
          action={handleSubmit}
        />
      </ThemeProvider>
    );
  };

  it("Should show Modal", () => {
    render(<Wrapper />);

    expect(screen.getByText(/Cadastrar novo funcionário/i)).toBeDefined();
  });

  it("Should close modal", async () => {
    render(<Wrapper />);
    const closeButton = screen.getByTestId("close-modal");
    const overlay = screen.getByTestId("modal-overlay");

    fireEvent.click(closeButton);

    expect(overlay).toHaveStyle("display: none");
  });

  it("Should call action when click on confirm button", async () => {
    render(<Wrapper />);
    const confirmButton = screen.getByTestId("modal-confirm-button");

    fireEvent.click(confirmButton);

    expect(handleSubmit).toHaveBeenCalled();
  });

  it("Should call onDismiss when click on cancel button", async () => {
    render(<Wrapper />);
    const cancelButton = screen.getByTestId("modal-cancel-button");

    fireEvent.click(cancelButton);

    expect(toggleModal).toHaveBeenCalled();
  });
});
