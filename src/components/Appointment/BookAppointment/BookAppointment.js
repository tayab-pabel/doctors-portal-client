import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        id: '1',
        subject: 'Teeth Orthodontics',
        visitingHour: '8:00 AM - 9:00 AM',
        totalSpace: 10
    },
    {
        id: '2',
        subject: 'Cosmetic Dentistry',
        visitingHour: '10:05 AM – 11:30 AM',
        totalSpace: 10
    },
    {
        id: '3',
        subject: 'Teeth Cleaning',
        visitingHour: '5:00 PM – 6:30 PM',
        totalSpace: 10
    },
    {
        id: '4',
        subject: 'Cavity Protection',
        visitingHour: '7:00 AM – 8:30 AM',
        totalSpace: 10
    },
    {
        id: '5',
        subject: 'Teeth Orthodontics',
        visitingHour: '10:00 AM - 11:00 AM',
        totalSpace: 10
    },
    {
        id: '6',
        subject: 'Teeth Orthodontics',
        visitingHour: '1:00 PM - 3:00 PM',
        totalSpace: 10
    }
];

const BookAppointment = ({date}) => {
    return (
        <div className="bookAppointment text-center">
            <h3 style={{color: '#5FC7C7'}}>Available Appointments on {date.toDateString()}</h3>
            <div className="row mt-5">
                {
                    bookingData.map(booking =><BookingCard booking={booking} date={date} key={booking.id}></BookingCard>)
                }
            </div>
        </div>
    );
};

export default BookAppointment;