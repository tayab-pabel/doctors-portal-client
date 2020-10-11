import React, { useState } from 'react';
import './Appointment.css';
import Footer from '../../Footer/Footer';
import Navbar from '../../Navbar/Navbar';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';


const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = date => {
        setSelectedDate(date)
    }
    return (
        <div className="appointment">
            <div className="container">
                <Navbar></Navbar>
                <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
                <BookAppointment date={selectedDate}></BookAppointment>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Appointment;