import React, { useEffect, useState } from 'react';
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

    const [service,setService] =useState([])

    useEffect(() =>{
        fetch('https://polar-earth-67431.herokuapp.com/getServices')
        .then(response => response.json())
        .then(data =>setService(data))

    },[])



    return (
        <div id="Portfolio" className='container'>
            
            <h1 className=' text-center' style={{fontFamily:'Poppins',marginTop:'20%',marginBottom:'5%'}}>Provide awesome <span style={{color:'#7AB259'}}>services</span> </h1>
           
           <div className='row'>
            {
                service.map((info) =><ServiceCard key={info._id} info={info}></ServiceCard>)
            }

           
            
           </div>
            
       
        </div>
    );
};

export default Services;