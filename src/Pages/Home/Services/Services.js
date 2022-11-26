import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://genius-car-server-one-liard.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    return (
        <div className='mb-28'>
            <div className='text-center'>
                <h5 className='text-[#FF3811] font-bold text-lg mt-16 mb-5'>Services</h5>
                <h2 className='text-[#151515] font-bold text-[45px] '>Our Service Area</h2>
                <p className="pt-5 text-[#737373] w-2/5 mx-auto">
                    The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                </p>
            </div>
            <div className='mt-7 mb-12 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center'>
                <button className="py-3 px-[22px] text-[#FF3811] bg-transparent border border-[#FF3811] hover hover:border-[#FF3811] font-semibold rounded-md duration-500 hover:bg-[#FF3811] hover:text-white">Letest project</button>
            </div>
        </div>
    );
};

export default Services;