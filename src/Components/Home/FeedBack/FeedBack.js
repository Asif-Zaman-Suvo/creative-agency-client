import React from 'react';
import FeedBackCard from '../FeedBackCard/FeedBackCard';
import customer1 from '../../../images/customer-1.png';
import customer2 from '../../../images/customer-2.png';
import customer3 from '../../../images/customer-3.png';


let feedbackList=[
    {
        name:'Nash Patrik',
        img:customer1,
        position:'CEO,Manpol',
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis non pariatur magni aperiam harum! Illo!"

    },

    {
        name:'Miriam Barron',
        img:customer2,
        position:'CEO,Manpol',
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis non pariatur magni aperiam harum! Illo!"

    },

    {
        name:'Bria Malone',
        img:customer3,
        position:'CEO,Manpol',
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis non pariatur magni aperiam harum! Illo!"

    },

]  

const FeedBack = () => {
    return (
        <div className='container'>
            
        <h1 className=' text-center' style={{fontFamily:'Poppins',marginTop:'10%',marginBottom:'5%'}}>Clients <span style={{color:'#7AB259'}}>Feedback</span> </h1>
       
       <div className='row'>
        {
            feedbackList.map((feedback) =><FeedBackCard feedback={feedback}></FeedBackCard>)
        }
        
       </div>
        
   
    </div>
    );
};

export default FeedBack;