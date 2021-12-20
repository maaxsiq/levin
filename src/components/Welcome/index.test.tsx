import { render, screen } from '@testing-library/react';
import { Welcome } from '.';

test('Teste of render welcome component', () => {
  render(
      <Welcome/>
  );
});

test('Teste of the welcome subtitle text', () => {
  render(
      <Welcome/>
  );
  const linkElement = screen.getByText(/liven.tech/i);
  expect(linkElement).toBeInTheDocument();
});

test('Teste of the welcome button', () => {
  render(
      <Welcome/>
  );
  const linkElement = screen.getByRole("button");
  expect(linkElement).toBeInTheDocument();
});