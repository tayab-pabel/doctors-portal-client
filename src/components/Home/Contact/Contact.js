import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact my-5 py-5 text-center">
            <h5 className="pt-5" style={{color: '#5FC7C7'}}>CONTACT US</h5>
            <h2 className="text-white mt-3">Always Connect With Us</h2>
            <div className="row pb-5">
                <div className="col-md-9 mx-auto mt-5">
                   <form action="">
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group">
                           <textarea name="" className="form-control" id="" cols="20" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group">
                           <Link type="button" className="btn px-5"> Submit </Link>
                       </div>
                   </form>
               </div>
            </div>
        </div>
    );
};

export default Contact;