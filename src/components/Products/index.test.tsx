import { render, screen, waitFor } from "@testing-library/react";
import { Products } from ".";
import { CartProvider } from "../../hooks/cartProvider";
import axios from 'axios';

test("Test of render product component", () => {
  render(
    <CartProvider>
      <Products />
    </CartProvider>
  );
  expect(screen.getByTestId("testProduct")).toBeInTheDocument();
});

test('Test of the product title text', () => {
  render(
    <CartProvider>
      <Products/>
    </CartProvider>
  )
  const linkElement = screen.getByText(/Products/i);
  expect(linkElement).toBeInTheDocument();
});

test('Test of the function add product fail', () => {
  render(
    <CartProvider>
      <Products/>
    </CartProvider>
  )
    const item = screen.queryByTitle("productItem");
    expect(item).not.toBeTruthy();
});

test('test of axios', async () => {
  jest.spyOn(axios, 'get').mockResolvedValue({
    data: [
      {
        createAt: 'Test',
        id: '1',
        image: 'http://Test.com',
        name: 'John Doe',
        price: '250.00',
        stock: 2
      }
    ]
  })
  
  render (
    <CartProvider>
      <Products/>
    </CartProvider>
  )
  await waitFor(() => {
    expect(screen.getByTestId("productItem")).toBeInTheDocument();
  })
});