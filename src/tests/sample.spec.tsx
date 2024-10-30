import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../App";

describe("App", () => {
  it("renders headline", () => {
    render(<App />);

    const headline = screen.getByText(/It works and you found me!/i);

    expect(headline).toBeInTheDocument();
  });
});
