import React from 'react';
import './Header.css';
import Hero from '../Hero/Hero';
import Navbar from '../../Navbar/Navbar';
import BusinessInfo from '../BusinessInfo/BusinessInfo';

const Header = () => {
    return (
        <div className="header">
            <Navbar></Navbar>
            <Hero></Hero>
            <BusinessInfo></BusinessInfo>
        </div>
    );
};

export default Header;