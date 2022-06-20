import { setDoc, doc } from "firebase/firestore";
import { db } from "./Orders.jsx"
import OrdersItem from "./OrdersItem.jsx"

export default function OrderList({ orders, status }) {

    const ordersByStatus = orders.filter((order) => order.state === status)

    let btnText = '';
    switch (status) {
        case 'Pendiente':
            btnText = 'Haciendo';
            break;
        case 'Haciendo':
            btnText = 'Listo';
            break;
        case 'Listo':
            btnText = 'Entregado';
            break;
        default:
            break;
    }

    function updateState(id, newState) {
        setDoc(doc(db, "orders",id), {state: newState}, {merge:true});
    }

    return (
        <section className="orderStatusList">
            { ordersByStatus.map(order => {
                return (<OrdersItem  key={order.id} order={order} btnText={btnText} updateState={updateState}/>)
            })}
        </section>
    )
}