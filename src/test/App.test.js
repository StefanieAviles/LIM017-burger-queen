import { render, screen } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import App from '../App';

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



