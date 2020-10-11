import React from 'react';
import './Hero.css';
import chair from '../../../images/maskGroup1.png';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero my-5 py-5">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <div className="hero-main">
                        <h1 className="hero-title">Your New Smile <br/> Starts Here</h1>
                        <p className="hero-description mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis vel architecto maxime voluptatem eveniet obcaecati magnam exercitationem facere? Placeat eveniet consequatur ipsa accusantium?</p>
                        <Link to="/appointment" className="btn mt-4">GET APPOINTMENT</Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={chair} alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
    );
};

export default Hero;