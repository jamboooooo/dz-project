import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button tests", () => {
  test("button primary rendered", () => {
    render(<Button title="Купить" variant="primary" />);
    const title = screen.getByText(/Купить/);
    expect(title).toBeInTheDocument();
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass("bg-sky-600");
  });

  test("button secondary rendered", () => {
    render(<Button title="Скачать" variant="secondary" />);
    const title = screen.getByText(/Скачать/);
    expect(title).toBeInTheDocument();
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass("bg-blue-400");
  });
});
