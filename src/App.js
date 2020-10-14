import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home/Home';
import Review from './Components/Review/Review';


import ServiceList from './Components/ServiceList/ServiceList';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>

        </Route>

        <Route path='/dashboard/:courseName'>
          <Dashboard></Dashboard>
          

        </Route>

        <Route path='/serviceList'>
          <ServiceList></ServiceList>
        </Route>

        <Route path='/review'>
          <Review></Review>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
