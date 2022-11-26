import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Produts from '../Products/Produts';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Produts></Produts>
            <Team></Team>
        </div>
    );
};

export default Home