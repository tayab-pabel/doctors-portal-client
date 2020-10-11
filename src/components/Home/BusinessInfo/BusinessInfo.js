import React from 'react';
import './BusinessInfo.css';

const BusinessInfo = () => {
    return (
        <div className="businessInfo my-5 py-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="d-flex justify-content-center align-items-center bg-info-col rounded p-4">
                        <div className="icon">
                            <i class="far fa-clock"></i>
                        </div>
                        <div className="info mt-3 ml-3">
                            <h5>Opening Hours</h5>
                            <p>9AM - 5PM</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex justify-content-center align-items-center bg-dark-col rounded p-4">
                        <div className="icon">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="info mt-3 ml-3">
                            <h5>Visit Our Location</h5>
                            <p>Dhanmondi, Dhaka</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="d-flex justify-content-center align-items-center bg-info-col rounded p-4">
                        <div className="icon">
                            <i class="fas fa-phone-volume"></i>
                        </div>
                        <div className="info mt-3 ml-3">
                            <h5>Contact Us Now</h5>
                            <p>+000 123 456789</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessInfo;