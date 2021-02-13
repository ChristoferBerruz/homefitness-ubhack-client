import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from 'components/Authentication/Login';
import Logout from 'components/Authentication/Logout';

function App() {
  return (
    <div className="App">
      <Login />
      <Logout />
    </div>
  );
}

export default App;
