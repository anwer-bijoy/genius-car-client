import React from 'react';
import './BannerItem.css';

const BannerItem = ({ bannerData }) => {
    const { image, id, prev, next } = bannerData;
    return (
        <div id={`slide${id}`} className="carousel-item relative w-full ">
            <div className='carousel-img'>
                <img src={image} alt="banner_image" className="w-screen h-[600px] rounded-xl" />
            </div>
            <div className="absolute gap-5 transform -translate-y-1/2 left-24 top-1/2 ">
                <h1 className='text-6xl font-bold text-white'>
                    Affordable <br />
                    Price For Car <br />
                    Servicing <br />
                </h1>
                <p className='mt-5 text-white w-3/5'>
                    There are many variations of passages of  available, but the majority have suffered alteration in some form
                </p>
                <div className='mt-6'>
                    <button href="/" className="mr-5 py-3 px-[22px] text-white bg-[#FF3811] border border-[#FF3811] hover hover:border-white font-semibold rounded-md duration-500 hover:bg-transparent hover:text-white">Discover More</button>
                    <button href="/" className="py-3 px-[22px] text-white bg-transparent border border-white hover hover:border-[#FF3811] font-semibold rounded-md duration-500 hover:bg-[#FF3811] hover:text-white">Letest project</button>
                </div>
            </div>
            <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;