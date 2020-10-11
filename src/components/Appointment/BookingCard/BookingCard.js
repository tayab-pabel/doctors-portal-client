import React, { useState } from 'react';
import './BookingCard.css';
import AppointmentForm from '../AppointmentForm/AppointmentForm';

const BookingCard = ({booking, date}) => {
    const [modalIsOpen,setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    
    function closeModal(){
        setIsOpen(false);
    }
    return (
        
            <div className="col-md-4 mb-5">
                <div className="card p-3">
                    <div className="card-body text-center">
                        <h5 style={{color: '#1CC7C1'}} className="card-title text-brand">{booking.subject}</h5>
                        <p className="mb-0">{booking.visitingHour}</p>
                        <small style={{color: '#8B8888'}}>{booking.totalSpace} SPACES AVAILABLE</small>
                        <button onClick={openModal} className="btn mt-3">BOOK APPOINTMENT</button>
                        <AppointmentForm modalIsOpen={modalIsOpen} appointmentOn={booking.subject} closeModal={closeModal} date={date}></AppointmentForm>
                    </div>
                </div>
            </div>
        
    );
};

export default BookingCard;