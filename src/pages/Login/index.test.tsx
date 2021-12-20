import { render, screen } from "@testing-library/react";
import { Login } from ".";

test("Test of render login page", () => {
  render(<Login />);
  expect(screen.getByTestId("testContainer")).toBeInTheDocument();
});
