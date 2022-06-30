import Cart from '../Components/Cart';
import { render, screen, fireEvent } from '@testing-library/react';

const order = [
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

test('renders Cart', () => {
    render(<Cart  order={order} />)
    screen.getByText(`${order[0].item}`);
});
test('buttonAddItem', () => {
    const addItemQty = jest.fn();
    render(<Cart order={order} addItemQty={addItemQty} />)
    const Button = screen.getAllByTestId('addBtn');
    fireEvent.click(Button[0]);
    expect(addItemQty).toHaveBeenCalledTimes(1);
});
test('buttonMinusItem', () => {
    const subsItemQty = jest.fn();
    render(<Cart order={order} subsItemQty={subsItemQty} />)
    const Button = screen.getAllByTestId('minusBtn');
    fireEvent.click(Button[0]);
    expect(subsItemQty).toHaveBeenCalledTimes(1);
});
test('buttonDeleteItem', () => {
    const deleteItem = jest.fn();
    render(<Cart order={order} deleteItem={deleteItem} />)
    const Button = screen.getAllByTestId('deleteBtn');
    fireEvent.click(Button[0]);
    expect(deleteItem).toHaveBeenCalledTimes(1);
});
