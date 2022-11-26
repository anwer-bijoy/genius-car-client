import React, { useEffect, useState } from 'react';

const OrderRow = ({ order, handleDelete, handleUpdateStatus }) => {
    const [serviceDetails, setServiceDetails] = useState()
    const { serviceName, price, service, _id, status } = order;
    useEffect(() => {
        fetch(`https://genius-car-server-one-liard.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [service]);



    return (
        <tr>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-square btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="rounded  w-28 h-28">
                            <img src={serviceDetails?.img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold text-xl">{serviceName}</div>
                    </div>
                </div>
            </td>
            <td>

                Price: ${price}
            </td>
            <td>Purple</td>
            <th>
                <button onClick={() => handleUpdateStatus(_id)} className="btn bg-[#FF3811] text-white border-none px-5">{status ? status : 'Pending'}</button>
            </th>
        </tr>
    );
};

export default OrderRow;