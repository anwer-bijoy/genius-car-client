import React from 'react';
import bannerImage1 from "../../../assets/images/banner/1.jpg";
import bannerImage2 from "../../../assets/images/banner/2.jpg";
import bannerImage3 from "../../../assets/images/banner/3.jpg";
import bannerImage4 from "../../../assets/images/banner/4.jpg";
import bannerImage5 from "../../../assets/images/banner/5.jpg";
import bannerImage6 from "../../../assets/images/banner/6.jpg";
import BannerItem from './BannerItem';

const bannerDatas = [
    {
        image: bannerImage1,
        id: 1,
        prev: 6,
        next: 2
    },
    {
        image: bannerImage2,
        id: 2,
        prev: 1,
        next: 3
    },
    {
        image: bannerImage3,
        id: 3,
        prev: 2,
        next: 4
    },
    {
        image: bannerImage4,
        id: 4,
        prev: 3,
        next: 5
    },
    {
        image: bannerImage5,
        id: 5,
        prev: 4,
        next: 6
    },
    {
        image: bannerImage6,
        id: 6,
        prev: 5,
        next: 1
    },
]

const Banner = () => {
    return (
        <div className="carousel w-full pt-2 pb-10">
            {
                bannerDatas.map(bannerData => <BannerItem
                    key={bannerData.id}
                    bannerData={bannerData}
                ></BannerItem>)
            }
        </div>
    );
};

export default Banner;