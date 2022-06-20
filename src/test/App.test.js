import { render, screen , fireEvent } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import App from '../App';
import LogIn from '../Components/Log';
 
test('renders learn react link', () => {
  render(
  <BrowserRouter>
    <App />
  </BrowserRouter>);
  
  const inputUser = screen.getByPlaceholderText(/Usuario/i);
  expect(inputUser).toBeInTheDocument();

  const inputPassword = screen.getByPlaceholderText(/Contraseña/i);
  expect(inputPassword).toBeInTheDocument();
});


test('Clicking the Login button', () => {
  // eslint-disable-next-line testing-library/render-result-naming-convention
  render(
    <BrowserRouter>
    <LogIn />
    </BrowserRouter>);
  
  const handleClick = jest.fn();

  const Button = screen.getByText('Ingresar');
  fireEvent.click(Button);
  expect(handleClick).toHaveBeenCalledTimes(1)
});
