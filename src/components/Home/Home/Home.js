import React from 'react';
import './Home.css';
import Header from '../Header/Header';
import Services from '../Services/Services';
import FeaturedService from '../FeaturedService/FeaturedService';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';
import Blog from '../Blog/Blog';
import Doctors from '../Doctors/Doctors';
import Contact from '../Contact/Contact';
import Footer from '../../Footer/Footer';

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <Header></Header>
                <Services></Services>
                <FeaturedService></FeaturedService>
                <MakeAppointment></MakeAppointment>
                <Testimonial></Testimonial>
                <Blog></Blog>
                <Doctors></Doctors>
                <Contact></Contact>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;