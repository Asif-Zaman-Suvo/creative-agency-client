import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Components/Home/Home/Home';
import OrderPage from './Components/OrderPage/OrderPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>

        </Route>

        <Route path='/order/:courseName'>
          <OrderPage></OrderPage>

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
