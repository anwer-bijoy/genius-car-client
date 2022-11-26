import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import checkoutImg from "../../assets/images/checkout/checkout.png";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import './Checkout.css';

const Checkout = () => {
    const { _id, title, price } = useLoaderData()
    const { users } = useContext(AuthContext);
    const handlePlaceOrder = e => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`
        const email = form.email.value;
        const phone = form.phone.value || 'unregistered';
        const message = form.message.value;

        //simple phone number validation
        if (phone.length !== 11) {
            alert('Your phone number should be 11 characters');
            return;
        }

        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: {
                name,
                phone,
                email,
                message
            }
        };

        //send orders data to server
        fetch('https://genius-car-server-one-liard.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('genius-token')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Order placed successfully')
                    form.reset()
                }
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <div className='checkout relative'>
                <img className='w-full' src={checkoutImg} alt="/ds" />
            </div>
            <div className='my-28 p-5 md:p-12 lg:p-24 rounded-lg bg-[#f3f3f3]'>
                <h2 className='text-4xl font-medium mb-4'>You are about to order: {title}</h2>
                <p className='mb-5 font-medium text-2xl'>Price: ${price}</p>
                <form onSubmit={handlePlaceOrder}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <input name='firstName' type="text" placeholder="First name" className="input input-bordered w-full border-none" required />
                        <input name='lastName' type="text" placeholder="Last name" className="input input-bordered w-full border-none" required />
                        <input name='phone' type="text" placeholder="Your phone" className="input input-bordered w-full border-none" required />
                        <input name='email' type="text" defaultValue={users?.email} placeholder="Your email" className="input input-bordered w-full border-none" readOnly required />
                    </div>
                    <textarea name='message' className="textarea mt-5 w-full h-24" placeholder="Your message"></textarea>
                    <input type="submit" className='w-full mt-5 py-3 cursor-pointer rounded-md font-bold text-white bg-[#FF3811]' value="Order Confirm" />
                </form>
            </div>
        </div>
    );
};

export default Checkout;