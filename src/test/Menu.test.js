import { render, screen, fireEvent } from '@testing-library/react';
import MenuItem from '../Components/MenuItem';
import MenuList from '../Components/MenuList';

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