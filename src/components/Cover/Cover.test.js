import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Cover from "./Cover";

describe("Cover", () => {
  it("renders black market", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route index element={<Cover />} />
        </Routes>
      </BrowserRouter>,
    );

    const linkElement = screen.getByText(/black market/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("renders collaborators", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route index element={<Cover />} />
        </Routes>
      </BrowserRouter>,
    );

    const linkElement = screen.getByText(/collaborators/i);
    expect(linkElement).toBeInTheDocument();
  });
});
