import { render, screen } from '@testing-library/react';
import { Header } from './index';

test('Test of render header component', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Market/i);
  expect(linkElement).toBeInTheDocument();
});

test('Test of the imgLogo', () => {
  render(
      <Header/>
  );
  expect(screen.getByTestId("imgLogo")).toBeInTheDocument();
});

test('Test of the imgLogout', () => {
  render(
      <Header/>
  );
  expect(screen.getByTestId("imgLogout")).toBeInTheDocument();
});