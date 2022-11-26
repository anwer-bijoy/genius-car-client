import React from 'react';
import { FaStar } from 'react-icons/fa';

const ProductCard = ({ product }) => {
    const { picture, title, price } = product;

    return (
        <div className="card border">
            <figure className="bg-[#f3f3f3] py-5">
                <img src={picture} alt="Shoes" className="rounded-xl w-1/2 h-[150px]" />
            </figure>
            <div className="card-body items-center text-center">
                <div className='flex justify-center'>
                    <FaStar className='font-semibold text-[#FF3811] text-xl'></FaStar>
                    <FaStar className='font-semibold text-[#FF3811] text-xl'></FaStar>
                    <FaStar className='font-semibold text-[#FF3811] text-xl'></FaStar>
                    <FaStar className='font-semibold text-[#FF3811] text-xl'></FaStar>
                    <FaStar className='font-semibold text-[#FF3811] text-xl'></FaStar>
                </div>
                <h2 className="card-title font-bold text-2xl text-[#444444] my-3">{title}</h2>
                <p className='font-semibold text-[#FF3811] text-xl'>Price: ${price}</p>
            </div>
        </div>
    );
};

export default ProductCard;