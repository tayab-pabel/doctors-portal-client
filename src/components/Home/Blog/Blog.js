import React from 'react';
import './Blog.css';
import client1 from '../../../images/ellipse1.png';
import client2 from '../../../images/ellipse2.png';
import client3 from '../../../images/ellipse3.png';

const Blog = () => {
    return (
        <div className="blog text-center my-5 py-5">
            <h5 style={{color: '#5FC7C7'}}>OUR BLOG</h5>
            <h2 className="mt-3">From Our Blog News</h2>
            <div className="row mt-5">
                <div className="col-md-4 text-left">
                    <div className="single-blog p-5">
                        <div className="row d-flex align-items-center">
                            <div className="doctor-img ml-3">
                                <img className="img-fluid rounded-circle" src={client1} alt=""/>
                            </div>
                            <div className="doctor-info ml-4">
                                <h6>Rashed Kabir</h6>
                                <small >22 Aug 2018</small>
                            </div>
                        </div>
                        <p className="mt-3">Check at least a doctor in a  year for your teeth</p>
                        <p className="mt-4" >It is a long established fact that by the readable content of a lot layout. The point </p>
                    </div>
                </div>
                <div className="col-md-4 text-left">
                    <div className="single-blog p-5">
                        <div className="row d-flex align-items-center">
                            <div className="doctor-img ml-3">
                                <img className="img-fluid rounded-circle" src={client2} alt=""/>
                            </div>
                            <div className="doctor-info ml-4">
                                <h6>Dr. Caudi</h6>
                                <small >23 April 2019</small>
                            </div>
                        </div>
                        <p className="mt-3">2 times of brush in a day can Keep you healthy</p>
                        <p className="mt-4" >It is a long established fact that by the readable content of a lot layout. The point </p>
                    </div>
                </div>
                <div className="col-md-4 text-left">
                    <div className="single-blog p-5">
                        <div className="row d-flex align-items-center">
                            <div className="doctor-img ml-3">
                                <img className="img-fluid rounded-circle" src={client3} alt=""/>
                            </div>
                            <div className="doctor-info ml-4">
                                <h6>Dr. Caudi</h6>
                                <small >23 April 2019</small>
                            </div>
                        </div>
                        <p className="mt-3">The tooth cancer is taking a challenge</p>
                        <p className="mt-4" >It is a long established fact that by the readable content of a lot layout. The point </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;