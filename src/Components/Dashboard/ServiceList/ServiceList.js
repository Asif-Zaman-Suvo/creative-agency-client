import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import ServiceOrderList from '../ServiceOrderList/ServiceOrderList';


const ServiceList = () => {

    const [user] = useContext(UserContext)

    const [orderItem, setOrderItem] = useState([]);

    return (
        <div className="row">
            <div className="col-md-3">
            <LeftSideBar></LeftSideBar>
            </div>
            <div className="col-md-9">

                <h2 className="pt-5 ml-5" >Order History</h2>

                <div className="customFormStyle">
                    <div className="bg-white p-5">
                        <div className="">
                            <img src="" alt="" />
                            <h3>Web & Mobile design</h3>
                            <p className="text-secondary">We craft stunning and amazing web UI, using a well drrafted UX to fit your product.</p>
                        </div>
                    </div>

                </div>
            </div>

           



        </div >
    );
};

export default ServiceList;