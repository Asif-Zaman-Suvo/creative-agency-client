import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
    return (

       <Link style={{textDecoration: 'none'}} to={`order/${service.name}`}>
            <div className='col-md-4 mt-5 mb-5'>
            <div style={{ width: '20em' }} className="service card py-5 d-flex justify-content-center align-items-center">
                <img className="card-img-top" style={{ width: '74px', height: '74px' }} src={service.img} alt="Card image cap" />


                <div className="card-body text-center">
                    <h5 style={{ fontFamily: 'poppins', fontWeight: '600' }} class="card-title ">{service.name}</h5>
                    
                    <p style={{ color: '#4D4D4D', fontFamily: 'poppins', fontSize: '15px', fontStyle: 'normal' }} class="card-text ">{service.description}</p>

                </div>
            </div>
        </div>



       </Link>
    );
};

export default ServiceCard;