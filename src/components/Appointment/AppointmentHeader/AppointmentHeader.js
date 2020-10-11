import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import chair from '../../../images/maskGroup1.png';


const AppointmentHeader = ({handleDateChange}) => {
    
    return (
        <div className="appointmentHeader my-5 py-5">
            <div className="row">
                <div className="col-md-6">
                    <div className="hero-main">
                        <h1 className="hero-title">Appointment</h1>
                        <Calendar
                            onChange={handleDateChange}
                            value={new Date()}
                        />
                    </div>
                </div>
                <div className="col-md-6">
                    <img src={chair} alt="" className="img-fluid"/>
                </div>
            </div>
        </div>
    );
};

export default AppointmentHeader;