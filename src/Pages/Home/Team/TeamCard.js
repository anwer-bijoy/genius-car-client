import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const TeamCard = ({ tem }) => {
    const { img, name, experties, social } = tem;

    return (
        <div>
            <div className="card border p-5">
                <figure className="bg-[#f3f3f3]">
                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold text-2xl text-[#444444]">{name}</h2>
                    <p className='font-semibold text-[20px] text-[#737373] mb-2'>{experties}</p>
                    <div className='flex justify-center gap-3'>
                        <FaFacebook className='font-semibold text-[#FF3811] text-xl'></FaFacebook>
                        <FaTwitter className='font-semibold text-[#FF3811] text-xl'></FaTwitter>
                        <FaInstagram className='font-semibold text-[#FF3811] text-xl'></FaInstagram>
                        <FaLinkedin className='font-semibold text-[#FF3811] text-xl'></FaLinkedin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamCard;