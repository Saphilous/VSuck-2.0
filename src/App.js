import React from 'react';
import './App.css';
import HomeContainer from './Containers/HomeCont';
import DashBoardContainer from './Containers/Dashboard';
import FormContainer from './Containers/Form';
import Sigform from './Containers/SignupForm';
import Community from './Containers/Community';
import withAuth from './HOC/Auth/Auth'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Switch>
              <Route path='/' component= {HomeContainer} exact />
              <Route path='/Dashboard' component= {withAuth(DashBoardContainer)} exact />
              <Route path='/Login' component = {FormContainer} exact />
              <Route path='/Signup' component = {Sigform} exact />
              <Route path='/Community' component = {withAuth(Community)} exact />
            </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
