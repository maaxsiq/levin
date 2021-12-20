import { render } from "@testing-library/react";
import { Products } from ".";
import { CartProvider } from "../../hooks/cartProvider";

test("Teste of render product component", () => {
  render(
    <CartProvider>
      <Products />
    </CartProvider>
  );
});
