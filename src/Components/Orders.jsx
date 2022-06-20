import React, { useState, useEffect } from 'react';
import Header from "./Header";
import WaitersButtons from "./WaitersButtons";
import './Orders.css';
import OrdersList from "./OrdersList";
import { getFirestore, query, orderBy, onSnapshot, collection } from "firebase/firestore";
import { app } from '../Firebase/FirebaseInit';
export const db = getFirestore(app);

export default function Orders() {

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
            <WaitersButtons />
            <section className="ordersContainer">
                <div className="ordersDone">
                    <p>Ordenes Listas</p>
                    <OrdersList orders={orders} status="Listo" />
                </div>
            </section>
        </>
    );
}