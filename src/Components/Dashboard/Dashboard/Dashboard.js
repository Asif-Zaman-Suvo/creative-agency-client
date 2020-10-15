import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import LeftSideBar from '../LeftSideBar/LeftSideBar';


const Dashboard = () => {
    const [user, setUser] = useContext(UserContext);
    return (
        <section className="dashboard-content">
            <div className="row">
                <div className="col-md-2">
                    <LeftSideBar></LeftSideBar>
                </div>
                <div  className="col-md-10">
                    <span className="d-flex">
                        <h3 style={{'margin-left':'80px', 'margin-top':'50px'}}>Ordered Items</h3>
                        <h6 style={{'margin-left':'580px', 'margin-top':'50px'}}>{user.name}</h6>
                    </span>
                    
                    <div className="row customer-order-list">
                      
                    </div>
                </div>
                
            </div>
        </section>
    );
};

export default Dashboard;