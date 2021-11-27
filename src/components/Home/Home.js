import React from 'react';
import Carousel from '../Carousel/Carousel';
import About from '../About/About';
import Services from '../Services/Services'
import Features from '../Features/Features';

const Home = () => {
    return (
        <div>
            <div>
                <Carousel></Carousel>

                <Services></Services>
                <Features></Features>
                <h1 className='text-info mt-3'>About Us</h1>
                <About></About>
            </div>
        </div>
    );
};
export default Home;