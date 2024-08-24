import { ThemeProvider } from "styled-components";
import Loading from "./";
import { render, screen } from "@testing-library/react";
import theme from "~/theme";

describe("Loading", () => {
  it("Should show Loading", () => {
    render(
      <ThemeProvider theme={theme}>
        <Loading />
      </ThemeProvider>
    );
    expect(screen.getByTitle(/carregando/i)).toBeDefined();
  });
});
