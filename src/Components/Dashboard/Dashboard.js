import React from 'react';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import OrderForm from '../OrderForm/OrderForm';


const Dashboard = () => {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3">
                    <LeftSideBar></LeftSideBar>
                </div>

                <div className="col-md-1"></div>

                <div className="col-md-8">
                   
                    <div className="container">
                        <OrderForm></OrderForm>


                    </div>
                </div>


            </div>


        </div>
    );
};

export default Dashboard;