import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from "react-router-dom";
import MenuItem from '../Components/MenuItem';
import MenuList from '../Components/MenuList';
import WaitersButtons from '../Components/WaitersButtons';

test('renders MenuItems', () => {
    const option = {
        id: 1,
        item: 'Hamburgesa',
        price: 10
    }
    render(<MenuItem option={option} />)
    screen.getByText(`${option.item} $${option.price}`);
});

test('Clicking the button MenuItem', () => {
    const option = {
        id: 1,
        item: 'Hamburgesa',
        price: 10
    }
    const addItemQty = jest.fn()

    render(<MenuItem option={option} addItemQty={addItemQty} />);
    const Button = screen.getByText(`${option.item} $${option.price}`);
    fireEvent.click(Button);
    expect(addItemQty).toHaveBeenCalledTimes(1);
}); 

test('renders MenuList', () => {
    const data = [
        {
            id: 1,
            item: 'Hamburgesa',
            price: 10
        },
        {
            id: 2,
            item: 'Sandwich',
            price: 8
        }
    ]
    render(<MenuList data={data} />)
    screen.getByText(`${data[0].item} $${data[0].price}`);
});

test('button Waiters', () => {
    render(
        <BrowserRouter>
            <WaitersButtons/>
        </BrowserRouter>);
    const Button1 = screen.getByText('Tomar orden');
    expect(Button1).not.toBeDisabled();
    const Button2 = screen.getByText('Estado orden');
    expect(Button2).not.toBeDisabled();
}); 
test('buttonTakeOrder', () => {
    render(
        <BrowserRouter>
            <WaitersButtons/>
        </BrowserRouter>);
    const Button1 = screen.getByText('Tomar orden');
    fireEvent.click(Button1);
    // screen.getByText('Desayuno');
});
test('buttonOrderStatus', () => {
    render(
        <BrowserRouter>
            <WaitersButtons/>
        </BrowserRouter>);
    const Button1 = screen.getByText('Estado orden');
    fireEvent.click(Button1);
    //screen.getByText('Pendiente');
});

