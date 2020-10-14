import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import SplitPane from 'react-split-pane';
import Dashboard from '../Dashboard/Dashboard';
import LeftSideBar from '../LeftSideBar/LeftSideBar';
import Review from '../Review/Review';
import ServiceList from '../ServiceList/ServiceList';

const MainDashboard = () => {
    return (
        <SplitPane split="vertical" minSize={300}>
        <LeftSideBar />
        <div>
            <Route path="/dashboard/order" component={Dashboard}/>
            <Route path="/dashboard/service-list" component={ServiceList}/>
            <Route path="/dashboard/review" component={Review}/>
            
        </div>
    </SplitPane>
    );
};

export default MainDashboard;