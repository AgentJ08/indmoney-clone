"use client";
import axios from "axios";
import { useEffect, useState } from "react";


export default function Home() {

    const [orders, setOrders] = useState([{
        ticker: '',
        createdAt: '',
        _id: '',
        ordertype: '',
        quantity: '',
        price: ''
    }])

    useEffect(() => {
        const getOrders = async () => {
            const res = await axios.get(`/api/users/orders/`)
            setOrders(res.data.data)
        }
        getOrders();
    }, [])

    return (
        <div className=" flex flex-col gap-8 bg-gray-100 ">
            
            <div className=" flex flex-col bg-white gap-4 border rounded-lg ml-48 p-8 h-full w-[800px] mb-8 ">
                <div className=" flex flex-row gap-4 font-bold text-lg justify-between ">
                    <p>Instrument</p>
                    <p>Trade Time</p>
                    <p>Order ID</p>
                    <p>Type</p>
                    <p>Qty.</p>
                    <p>Price</p>
                    <p>Net Chg.</p>
                    <p>Day Chg.</p>
                </div>
                {orders.map(order =>
                    <div key={order._id} className=" flex flex-row gap-4 justify-between ">
                        <p>{order.ticker}</p>
                        <p>{order.createdAt}</p>
                        <p>{order._id}</p>
                        <p>{order.ordertype}</p>
                        <p>{order.quantity}</p>
                        <p>{order.price}</p>
                        <p>Stale</p>
                        <p>Stale</p>
                    </div>
                )}
            </div>
        </div>
    );
}
