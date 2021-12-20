import { render } from "@testing-library/react";
import { CartProvider } from "../../hooks/cartProvider";
import { Cart } from "./index";

test("Teste of render cart component", () => {
  render(
    <CartProvider>
      <Cart />
    </CartProvider>
  );
});
