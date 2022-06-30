import OrderList from '../Components/OrdersList';
import OrdersItems from '../Components/OrdersItem';
import { render, screen, fireEvent } from '@testing-library/react';

const data = [
    {
        state: 'Haciendo',
        order: [
            {
            id: 1,
            item: 'Hamburgesa',
            price: 10, 
            count: 1
            },
            {
            id: 2,
            item: 'Sandwich',
            price: 8,
            count: 1
            }
        ],
        table: 1,
        client: 'Maria'

    },
    {
        state: 'Pendiente',
        order: [
            {
            id: 1,
            item: 'Hamburgesa',
            price: 10,
            count: 1
            },
            {
            id: 2,
            item: 'Sandwich',
            price: 8,
            count: 1
            }
        ],
        table: 2,
        client: 'Rosy'

    },
    {
        state: 'Listo',
        order: [
            {
            id: 1,
            item: 'Hamburgesa',
            price: 10,
            count: 1
            },
            {
            id: 2,
            item: 'Sandwich',
            price: 8,
            count: 1
            }
        ],
        table: 3,
        client: 'Nadia'

    }
]
test('renders OrderList', () => {    
    render(<OrderList orders={data} status = 'Haciendo' />)
    screen.getByText('Listo');
    render(<OrderList orders={data} status = 'Pendiente' />)
    screen.getByText('Haciendo');
    render(<OrderList orders={data} status = 'Listo' />)
    screen.getByText('Entregado');
});
test('renders OrdersItems', () => {    
    const setState = jest.fn();
    render(<OrdersItems order={data[0]} btnText='Haciendo' setState={setState}  />)
    const Button = screen.getByText('Haciendo');
    fireEvent.click(Button);
    expect(setState).toHaveBeenCalledTimes(1);
    
});
