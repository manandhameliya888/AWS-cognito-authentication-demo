import React from 'react';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import { Account } from './components/Account';
import Status from './components/Status';
import Settings from './components/Settings';

const App = () => {
  return (
    <Account>
      <br></br>
      <Status />
      <br></br><hr></hr>
      <Signup />
      <br></br><hr></hr><hr></hr>
      <Login />
      <br></br><hr></hr><hr></hr>
      <Settings />
      <br></br><hr></hr><hr></hr>
    </Account>
  );
}

export default App;