import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service

    return (
        <div className="card shadow-xl p-5">
            <figure className="">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="">
                <h2 className="card-title font-bold text-2xl text-[#444444] my-5">{title}</h2>
                <div className=' flex justify-between items-center'>
                    <p className='font-semibold text-[#FF3811] text-xl'>Price: ${price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <FaArrowRight className='font-semibold text-[#FF3811] text-xl'></FaArrowRight>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;