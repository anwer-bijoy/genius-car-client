import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Produts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    return (
        <div className='mb-28'>
            <div className='text-center'>
                <h5 className='text-[#FF3811] font-bold text-lg mt-16 mb-5'>Popular Products</h5>
                <h2 className='text-[#151515] font-bold text-[45px] '>Browse Our Products</h2>
                <p className="pt-5 text-[#737373] w-2/5 mx-auto">
                    The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
            </div>
            <div className='mt-7 mb-12 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
            <div className='text-center'>
                <button className="py-3 px-[22px] text-[#FF3811] bg-transparent border border-[#FF3811] hover hover:border-[#FF3811] font-semibold rounded-md duration-500 hover:bg-[#FF3811] hover:text-white">More Products</button>
            </div>
        </div>
    );
};

export default Produts;