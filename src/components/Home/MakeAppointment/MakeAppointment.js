import React from 'react';
import './MakeAppointment.css';
import doctor from '../../../images/doctor.png';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <div className="makeAppointment py-5">
            <div className="row">
                <div className="col-md-5 d-none d-md-block">
                    <img className="img-fluid" src={doctor} alt=""/>
                </div>
                <div className="col-md-7 text-white">
                    <h5 style={{color: '#6ACECE'}} className="text-uppercase">Appointment</h5>
                    <h2 className="mt-4">Make an Appointment Today</h2>
                    <p  className="mt-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque magnam ad consequuntur assumenda saepe hic amet nemo ea facere a!</p>
                    <Link className="btn mt-4">Learn More</Link>
                </div>
            </div>
        </div>
    );
};

export default MakeAppointment;