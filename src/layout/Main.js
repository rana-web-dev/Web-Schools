import React from 'react';
import { Outlet } from 'react-router-dom';
import LogIn from '../components/logIn/LogIn';
import Nav from '../components/nav/Nav';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;