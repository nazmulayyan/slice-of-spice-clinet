import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='md:px-10 px-5'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;