import { render, screen } from '@testing-library/react';
import { Header } from './index';

test('Teste of render header component', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Market/i);
  expect(linkElement).toBeInTheDocument();
});
