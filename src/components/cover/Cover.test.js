import { render, screen } from "@testing-library/react";
import Cover from "./Cover";

describe("Cover", () => {
  it("renders black market", () => {
    render(<Cover />);
    const linkElement = screen.getByText(/black market/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("renders collaborators", () => {
    render(<Cover />);
    const linkElement = screen.getByText(/collaborators/i);
    expect(linkElement).toBeInTheDocument();
  });
});
