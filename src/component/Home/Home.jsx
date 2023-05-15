import React from 'react';
import Banner from '../Banner/Banner';
import Chefs from '../Chefs/Chefs';
import Service from '../Service/Service';
import Branch from '../Branch/Branch';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <Service></Service>
            <Branch></Branch>
        </div>
    );
};

export default Home;
