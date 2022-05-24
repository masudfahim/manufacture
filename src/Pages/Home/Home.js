import React from 'react';
import Summary from '../Summary';
import Bannar from './Bannar';
import Tools from './Tools';

const Home = () => {
    return (
        <div className=''>
            <Bannar></Bannar>
            <Tools></Tools>
            <Summary></Summary>

        </div>
    );
};

export default Home;