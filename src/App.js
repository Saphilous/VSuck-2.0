import React from 'react';
import './App.css';
import HomeContainer from './Containers/HomeCont';
import DashBoardContainer from './Containers/Dashboard';
import FormContainer from './Containers/Form';
import Sigform from './Containers/SignupForm';
import Logout from './Containers/Logout';
import Community from './Containers/Community';
import Classes from './Containers/ClassContainer';
import QuizContainer from './Containers/Quizcontainer';
import Results from './Containers/Results';
import withAuth from './HOC/Auth/Auth';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
            <Switch>
              <Route path='/' component= {HomeContainer} exact />
              <Route path='/Dashboard' component= {withAuth(DashBoardContainer)} exact />
              <Route path='/Login' component = {FormContainer} exact />
              <Route path='/Signup' component = {Sigform} exact />
              <Route path ='/Logout' component = {Logout} exact />
              <Route path='/Community' component = {withAuth(Community)} exact />
              <Route path = '/Dashboard/:id' component = {withAuth(Classes)} exact/>
              <Route path = '/quizzes/:id' component={withAuth(QuizContainer)} exact />
              <Route path = '/Results' component={withAuth(Results)} exact />
            </Switch>
        </div>
    </BrowserRouter>
  );
}

export default App;
