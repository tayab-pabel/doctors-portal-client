import React from 'react';
import './Testimonial.css';
import client1 from '../../../images/ellipse1.png';
import client2 from '../../../images/ellipse2.png';
import client3 from '../../../images/ellipse3.png';

const Testimonial = () => {
    return (
        <div className="testimonial my-5 py-5">
            <h5 style={{color: '#5FC7C7'}}>TESTIMONIAL</h5>
            <h2 className="mt-3">What’s Our Patients Says</h2>
            <div className="row mt-5 pt-5">
                <div className="col-md-4 text-center">
                    <p className="p-4 m-2">It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content</p>
                    <div className="row d-flex align-items-center justify-content-center mt-4">
                        <div className="client-img">
                            <img className="img-fluid rounded-circle" src={client1} alt=""/>
                        </div>
                        <div className="client-info ml-3">
                            <h6 style={{color: '#5FC7C7'}}>Winson Herry</h6>
                            <small>California</small>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <p className="p-4 m-2">It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content</p>
                    <div className="row d-flex align-items-center justify-content-center mt-4">
                        <div className="client-img">
                            <img className="img-fluid rounded-circle" src={client2} alt=""/>
                        </div>
                        <div className="client-info ml-3">
                            <h6 style={{color: '#5FC7C7'}}>Winson Herry</h6>
                            <small>California</small>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 text-center">
                    <p className="p-4 m-2">It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using ‘Content here, content</p>
                    <div className="row d-flex align-items-center justify-content-center mt-4">
                        <div className="client-img">
                            <img className="img-fluid rounded-circle" src={client3} alt=""/>
                        </div>
                        <div className="client-info ml-3">
                            <h6 style={{color: '#5FC7C7'}}>Winson Herry</h6>
                            <small>California</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;