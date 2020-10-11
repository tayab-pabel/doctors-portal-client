import React from 'react';
import doctors from '../../../images/doctors.png';

const Doctors = () => {
    return (
        <div className="doctors my-5 text-center">
            <h5 style={{color: '#5FC7C7'}}>Our Doctors</h5>
            <div className="row mt-5">
                <div className="col-md-4 p-4">
                    <img className="img-fluid " src={doctors} alt=""/>
                    <h5 className="mt-3">Dr. Caudi</h5>
                    <div className="d-flex justify-content-center mt-3">
                        <i style={{color: '#5FC7C7'}} class="fas fa-phone-alt"></i>
                        <small style={{color: '#B3B2B5'}}>+61 452 200 126</small>
                    </div>
                </div>
                <div className="col-md-4 p-4">
                    <img className="img-fluid " src={doctors} alt=""/>
                    <h5 className="mt-3">Dr. Caudi</h5>
                    <div className="d-flex justify-content-center mt-3">
                        <i style={{color: '#5FC7C7'}} class="fas fa-phone-alt"></i>
                        <small style={{color: '#B3B2B5'}}>+61 452 200 126</small>
                    </div>
                </div>
                <div className="col-md-4 p-4">
                    <img className="img-fluid " src={doctors} alt=""/>
                    <h5 className="mt-3">Dr. Caudi</h5>
                    <div className="d-flex justify-content-center mt-3">
                        <i style={{color: '#5FC7C7'}} class="fas fa-phone-alt"></i>
                        <small style={{color: '#B3B2B5'}}>+61 452 200 126</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctors;