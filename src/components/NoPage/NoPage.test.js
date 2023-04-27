import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import NoPage from "./NoPage";

describe("No Page", () => {
  it("renders page not found", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>,
    );

    const linkElement = screen.getByText(/page not found/i);
    expect(linkElement).toBeInTheDocument();
  });

  it("renders home link", () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path='*' element={<NoPage />} />
        </Routes>
      </BrowserRouter>,
    );

    const linkElement = screen.getByText(/home/i);
    expect(linkElement).toBeInTheDocument();
  });
});
