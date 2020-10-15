import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import ServiceOrderList from '../ServiceOrderList/ServiceOrderList';



const ServiceList = () => {

    const [user, setUser] = useContext(UserContext);
    const { name, email, photoURL } = user

    const [service, setService] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(response => response.json())
            .then(data => setService(data))

    }, [])


    return (
        <div className="row">
            <div className="col-md-3">
                <LeftSideBar></LeftSideBar>
            </div>
            <div className="col-md-9  bg-light">

                <h2 className="pt-5 ml-5">Order History</h2>
                <h3 className="ml-5">{name}</h3>

                <div className="container row">                   
                        {
                            service.map(ser => <ServiceOrderList ser={ser}></ServiceOrderList>)
                        }                 
                </div>


            </div>





        </div >
    );
};

export default ServiceList;