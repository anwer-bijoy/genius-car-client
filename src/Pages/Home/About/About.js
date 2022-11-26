import React from 'react';
import parts from "../../../assets/images/about_us/parts.jpg";
import person from "../../../assets/images/about_us/person.jpg";

const About = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <div className='relative w-1/2'>
                    <img src={person} alt='about_image' className="w-4/5 rounded-lg shadow-2xl h-full" />
                    <img src={parts} alt='about_image' className="absolute w-1/2 right-5 top-1/2 border-[12px] border-white shadow-2xl" />
                </div>
                <div className='w-1/2'>
                    <h5 className='text-[#FF3811] font-bold text-lg mt-5'>About us</h5>
                    <h1 className="text-5xl font-bold">
                        We are qualified <br />
                        & of experience  <br />
                        in this field <br />
                    </h1>
                    <p className="pt-7 text-[#737373] w-4/5">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <p className="pt-5 pb-7 text-[#737373] w-4/5">
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <button href="/" className="mr-5 py-3 px-[22px] text-white bg-[#FF3811] border border-[#FF3811] hover font-semibold rounded-md duration-500 hover:bg-transparent hover:text-[#FF3811]">Discover More</button>
                </div>
            </div>
        </div>
    );
};

export default About;