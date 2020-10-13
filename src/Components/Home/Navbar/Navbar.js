import React from 'react';
import logo from '../../../images/logos/logo.png'
import './Navbar.css';

const Navbar = () => {
    return (
        <section className="container">
            <nav class="navbar navbar-expand-lg navbar-light">
            <img style={{width:'150px',height:'47px'}} src={logo} alt=""/>
           

           <div class="collapse navbar-collapse pt-4" id="navbarSupportedContent">
               <ul class="navbar-nav ml-auto">
                   <li class="nav-item active">
                       <a class="nav-link mr-5 text-dark" href="#">Home</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link mr-5 text-dark" href="#">Our Portfolio</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link mr-5 text-dark" href="#">Our Team</a>
                   </li>
                   <li class="nav-item">
                       <a class="nav-link mr-5 text-dark" href="#">Contact Us</a>
                   </li>

                   <li class="nav-item">
                       <button class="hireButton">Login</button>
                   </li>
                  
                    
                   
               </ul>

           </div>
       </nav>
        </section>
    );
};

export default Navbar;