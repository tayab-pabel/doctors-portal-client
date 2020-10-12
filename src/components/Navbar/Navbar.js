import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light my-3">
                <Link className="navbar-brand" to="/">Doctors <span className="navbar-bold">Portal</span></Link>
                <Link className="navbar-toggler" to="/" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <Link className="nav-link mr-4" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-4" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-4" to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-4" to="/dashboard">Admin</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link mr-4" to="#">Blog</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Contact Us</Link>
                    </li>
                    </ul>
                </div>
        </nav>
    );
};

export default Navbar;