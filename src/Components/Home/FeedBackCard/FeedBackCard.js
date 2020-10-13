import React from 'react';
import './FeedBackCard.css';

const FeedBackCard = ({ feedback }) => {
    return (
        <div className='col-md-4 mt-4'>
            <div className="feedback card" style={{ width: '20rem' }}>

               <div className="container">
               <div className="row py-2">
                    
                    <div className="col-md-3 mt-2">
                        <img style={{ width: '74px', height: '74px' }} className="card-img-top " src={feedback.img} />
                    </div>

                    <div className='col-md-9 mt-3'>
                        <h5 style={{fontFamily:'poppins'}}>{feedback.name}</h5>

                        <h6 style={{fontFamily:'poppins'}}>{feedback.position}</h6>
                    </div>

               
            </div>
               </div>
                <div class="card-body">

                    <p style={{color:'#707070'}} class="card-text">{feedback.description}</p>
                </div>
            </div>
        </div>

    );
};

export default FeedBackCard;