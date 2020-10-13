import React from 'react';
import Web from '../../../images/icons/Web.png';
import Graphics from '../../../images/icons/Graphics.png';
import WebDev from '../../../images/icons/WebDev.png';
import ServiceCard from '../ServiceCard/ServiceCard';


let serviceList=[
    {
        name:'Web & Mobile Design',
        img:Web,
        description:"We craft stunning and amazing web UI, using a well drrafted UX to fit your product."

    },
    {
        name:'Graphic Design',
        img:Graphics,
        description:"Amazing flyers, social media posts and brand representations that would make your brand stand out."

    },

    {
        name:'Web Development',
        img:WebDev,
        description:"With well written codes, we build amazing apps for all platforms, mobile and web apps in general."

    }

]  

const Services = () => {
    return (
        <div className='container'>
            
            <h1 className=' text-center' style={{fontFamily:'Poppins',marginTop:'20%',marginBottom:'5%'}}>Provide awesome <span style={{color:'#7AB259'}}>services</span> </h1>
           
           <div className='row'>
            {
                serviceList.map((service) =><ServiceCard service={service}></ServiceCard>)
            }
            
           </div>
            
       
        </div>
    );
};

export default Services;