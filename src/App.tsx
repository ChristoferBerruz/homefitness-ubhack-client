import React from 'react';
import {
  BrowserRouter, 
  Route, 
  Switch
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Login from 'components/Authentication/Login';
import Logout from 'components/Authentication/Logout';
import Home from 'components/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="logout" component={Logout} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
