import React from 'react';
import Summary from '../Summary';
import Bannar from './Bannar';
import Review from './Review';
import Tools from './Tools';

const Home = () => {
    return (
        <div className=''>
            <Bannar></Bannar>
            <Tools></Tools>
            <Summary></Summary>
            <Review></Review>

        </div>
    );
};

export default Home;