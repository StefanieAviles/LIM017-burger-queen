import React, { useState, useEffect } from 'react';
import Header from "./Header";
import './Orders.css';
import OrdersList from "./OrdersList";
import { getFirestore, query, orderBy, onSnapshot, collection } from "firebase/firestore";
import { app } from '../Firebase/FirebaseInit';
export const db = getFirestore(app);

export default function Kitchen() {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const ordersCollection = collection(db, "orders");
        const q = query(ordersCollection, orderBy("date", "desc"));
        const getOrders = onSnapshot(q, (snapshot) =>
            setOrders(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        );
        return getOrders;
    }, []);

    return (
        <>
            <Header />
            <section className="ordersContainer">
                <div className="ordersPending">
                    <p>Pendientes</p>
                    <OrdersList orders={orders} status="Pendiente" />
                </div>
                <div className="ordersDoing">
                    <p>En Proceso</p>
                    <OrdersList orders={orders} status="Haciendo"/>
                </div>
                <div className="ordersDone">
                    <p>Listas</p>
                    <OrdersList orders={orders} status="Listo" />
                </div>
            </section>
        </>
    );
}