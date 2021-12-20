import { fireEvent, render, screen } from "@testing-library/react";
import { CartProvider, useCart } from "../../hooks/cartProvider";
import { Cart } from "./index";

const productsMock = [
  {
    createAt: "Test",
    id: "1",
    image: "http://Test.com",
    name: "John Doe",
    price: "250.00",
    stock: 2,
    qnt: 1,
  },
  {
    createAt: "Test",
    id: "2",
    image: "http://Test.com",
    name: "John Doe",
    price: "250.00",
    stock: 2,
    qnt: 1,
  },
];

const mockLessProductFn = jest.fn();
const mockAddProductFn = jest.fn();
const mockRemoveProductFn = jest.fn();
const mockRemoveAllProductsFn = jest.fn();

test("Test of render cart component", () => {
  render(
    <CartProvider>
      <Cart />
    </CartProvider>
  );
  expect(screen.getByTestId("testCart")).toBeInTheDocument();
});


// jest.mock("../../hooks/cartProvider", () => {
//   return jest.fn(() => ({
//   products: productsMock,
//   lessProduct: mockLessProductFn,
//   addProduct: mockAddProductFn,
//   removeProduct: mockRemoveProductFn,
//   removeAllProducts: mockRemoveAllProductsFn,
//   }));
// });



// test("Handle call function less product", async () => {
//   render(
//     <CartProvider>
//       <Cart />
//     </CartProvider>
//   );
//   fireEvent.click(screen.getByTestId("less-1"));
//   expect(mockLessProductFn).toHaveBeenCalled();
// });
