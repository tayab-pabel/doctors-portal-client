import React from 'react';
import tooth1 from '../../../images/tooth1.png';
import tooth2 from '../../../images/tooth2.png';
import tooth3 from '../../../images/tooth3.png';

const Services = () => {
    return (
        <div className="services my-5 py-5 text-center">
            <h5 style={{color: '#5FC7C7'}}>OUR SERVICES</h5>
            <h2>Services We Provide</h2>
            <div className="row mt-5 pt-5">
                <div className="col-md-4">
                    <div className="single-service">
                        <img style={{width:'100px', height:'100px'}} src={tooth1} alt=""/>
                        <h4 className="mt-3">Fluoride Treatment</h4>
                        <p className="mt-3">Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="single-service">
                        <img style={{width:'100px', height:'100px'}} src={tooth2} alt=""/>
                        <h4 className="mt-3">Cavity Filling</h4>
                        <p className="mt-3">Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the </p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="single-service">
                        <img style={{width:'100px', height:'100px'}} src={tooth3} alt=""/>
                        <h4 className="mt-3">Teath Whitening</h4>
                        <p className="mt-3">Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;