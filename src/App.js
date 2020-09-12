import React from 'react';
import './App.css';
import HomeContainer from './Containers/HomeCont';
import DashBoardContainer from './Containers/Dashboard';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Switch>
            <Route path='/' component= {HomeContainer} exact />
            <Route path='/Dashboard' component= {DashBoardContainer} exact />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
