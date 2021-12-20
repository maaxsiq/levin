import { render } from '@testing-library/react';
import { Home } from '.';
import { CartProvider } from '../../hooks/cartProvider';

test('Teste of render home page', () => {
  render(
    <CartProvider>
      <Home/>
    </CartProvider>
  );
});
