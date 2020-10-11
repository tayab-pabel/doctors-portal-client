import React from 'react';
import { li, Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer my-5 pt-5">
            <div className="row">
                <div className="col-md-3">
                    <ul className="list-unstyled mt-4 pt-2">
                        <li className="mt-3"><Link to="/">Emergency Dental Care</Link></li>
                        <li className="mt-3"><Link to="/">Check Up</Link></li>
                        <li className="mt-3"><Link to="/">Treatment of Personal Diseases</Link></li>
                        <li className="mt-3"><Link to="/">Tooth Extraction</Link></li>
                        <li className="mt-3"><Link to="/">Check Up</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                <h5 style={{color: '#5FC7C7'}}>Services</h5>
                    <ul className="list-unstyled">
                        <li className="mt-4"><Link to="/">Emergency Dental Care</Link></li>
                        <li className="mt-3"><Link to="/">Check Up</Link></li>
                        <li className="mt-3"><Link to="/">Treatment of Personal Diseases</Link></li>
                        <li className="mt-3"><Link to="/">Tooth Extraction</Link></li>
                        <li className="mt-3"><Link to="/">Check Up</Link></li>
                        <li className="mt-3"><Link to="/">Check Up</Link></li>
                        <li className="mt-3"><Link to="/">Check Up</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                <h5 style={{color: '#5FC7C7'}}>Oral Health</h5>
                    <ul className="list-unstyled">
                        <li className="mt-4"><Link to="/">Emergency Dental Care</Link></li>
                        <li className="mt-3"><Link to="/">Check Up</Link></li>
                        <li className="mt-3"><Link to="/">Treatment of Personal Diseases</Link></li>
                        <li className="mt-3"><Link to="/">Tooth Extraction</Link></li>
                        <li className="mt-3"><Link to="/">Check Up</Link></li>
                        <li className="mt-3"><Link to="/">Check Up</Link></li>
                        <li className="mt-3"><Link to="/">Check Up</Link></li>
                    </ul>
                </div>
                <div className="col-md-3">
                <h5 style={{color: '#5FC7C7'}}>Our Address</h5>
                    <p>Dhanmondi, Dhaka</p>
                    <ul className="social-media list-inline mb-5">
                        <li className="list-inline-item"><Link to="/"><i className="icon fab fa-facebook-f"></i></Link></li>
                        <li className="list-inline-item"><Link to="/"><i className="icon fab fa-google"></i></Link></li>
                        <li className="list-inline-item"><Link to="/"><i className="icon fab fa-twitter"></i></Link></li>
                    </ul>
                    <p>Call Now</p>
                    <li className="btn">+2025550295</li>
                </div>
            </div>
            <p className="text-center mt-5">Copyright 2020 All Rights Reserved</p>
        </div>
    );
};

export default Footer;