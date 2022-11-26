import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const [orders, setOrders] = useState([]);

    const { users, logOut } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://genius-car-server-one-liard.vercel.app/orders?email=${users?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                return res.json()
            })
            .then(data => {
                setOrders(data)
            })
    }, [users?.email, logOut]);

    const handleDelete = id => {
        const proceed = window.confirm('Are sure want to cancel this order?');
        if (proceed) {
            fetch(`https://genius-car-server-one-liard.vercel.app/orders/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted Successfully');
                        const remainig = orders.filter(odr => odr._id !== id);
                        console.log(remainig)
                        setOrders(remainig);
                    }
                })
        }
    };

    const handleUpdateStatus = id => {
        fetch(`https://genius-car-server-one-liard.vercel.app/orders/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify({ status: 'approved' })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(order => order._id !== id)
                    const approving = orders.find(order => order._id === id);
                    approving.status = 'Approved'
                    const newOrders = [approving, ...remaining];
                    setOrders(newOrders);
                }
            })
    }

    return (
        <div className="overflow-x-auto w-full">
            <h1 className='text-2xl mt-5'>You have only {orders.length} orders</h1>
            <table className="table w-full my-5 md:my-10">
                <tbody>
                    {
                        orders.map(order => <OrderRow
                            key={order._id}
                            order={order}
                            handleDelete={handleDelete}
                            handleUpdateStatus={handleUpdateStatus}
                        ></OrderRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Orders;