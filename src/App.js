import React from 'react';
import './App.css';
import HomeContainer from './Containers/HomeCont';
import DashBoardContainer from './Containers/Dashboard';

function App() {
  return (
    <div className="App">
      <HomeContainer />
      <DashBoardContainer />
    </div>
  );
}

export default App;
