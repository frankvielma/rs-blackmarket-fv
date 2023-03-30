import { render, screen } from '@testing-library/react';
import App from './App';

test('renders black market', () => {
  render(<App />);
  const linkElement = screen.getByText(/black market/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders collaborators', () => {
  render(<App />);
  const linkElement = screen.getByText(/collaborators/i);
  expect(linkElement).toBeInTheDocument();
});
