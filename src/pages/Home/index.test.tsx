import { render, screen } from '@testing-library/react';
import { Home } from '.';
import { CartProvider } from '../../hooks/cartProvider';

test('Test of render home page', () => {
  render(
    <CartProvider>
      <Home/>
    </CartProvider>
  );
  expect(screen.getByTestId("testContainer")).toBeInTheDocument();
});
