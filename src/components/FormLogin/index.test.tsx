import { fireEvent, queryByTitle, render, screen } from '@testing-library/react';
import { FormLogin } from './index';

test('Test of render form-login component', () => {
  render(<FormLogin />);
  expect(screen.getByTestId("testLogin")).toBeInTheDocument();
});

test('Test of the welcome text', () => {
  render(
    <FormLogin/>
  )
  const linkElement = screen.getByText(/Welcome/i);
  expect(linkElement).toBeInTheDocument();
});

it("onChangeUser", () => {
  render(
    <FormLogin/>
  )
  const userInput = screen.getByTitle("userId");
  fireEvent.change(userInput , { target: { value: 'test@liven.com' } });
});

it("onChangePass", () => {
  render(
    <FormLogin/>
  )
  const passInput = screen.getByTitle("passId");
  fireEvent.change(passInput , { target: { value: '1234' } });
});



