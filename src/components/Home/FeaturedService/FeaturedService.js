import React from 'react';
import './FeaturedService.css';
import maskGroup3 from '../../../images/maskGroup3.png';
import { Link } from 'react-router-dom';

const FeaturedService = () => {
    return (
        <div className="featuredService my-5 py-5">
            <div className="row d-flex align-items-center">
                <div className="col-md-5">
                    <img className="service-img img-fluid" src={maskGroup3} alt=""/>
                </div>
                <div className="col-md-7">
                    <h2>Exceptional Dental Care, on Your Terms</h2>
                    <p className="mt-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its  layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using ‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page </p>
                    <Link className="btn mt-4">Learn More</Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedService;