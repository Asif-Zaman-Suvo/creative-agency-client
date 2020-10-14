import React, { createContext } from 'react';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Home from './Components/Home/Home/Home';
import Login from './Components/LoginPage/Login';
import PrivateRoute from './Components/LoginPage/PrivateRoute';


export const UserContext = createContext();

function App() {

  

  const defaultUser = {
    isSignedIn: false,
    name: '',
    email: '',
    photo: '',
    message: ''
  }
  const [user, setUser] = useState(defaultUser);

  return (

    <UserContext.Provider value={[user,setUser]}>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>

        </Route>

        <PrivateRoute path='/dashboard/:courseName'>
          <Dashboard></Dashboard>         
        </PrivateRoute>

        <Route path='/login'>
          <Login></Login>

        </Route>

        
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
