import React from 'react';
import {
  BrowserRouter, 
  Route, 
  Switch,
  Redirect
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import './custom.scss';
import Login from 'components/Authentication/Login';
import Logout from 'components/Authentication/Logout';
import Home from 'components/Home/Home';
import Profile from 'components/Profile/Profile';
import {useAuth} from 'hooks/auth';
import {UserContext} from 'components/Providers/UserContext';

function App() {

  const {initializing, user} = useAuth();
  if (initializing){
    return <div></div>
  }

  return (
    <UserContext.Provider value={{user}}>
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            {user && <Route path="/logout" component={Logout} />}
            {user && <Route path="/profile" component={Profile} />}
            <Route render={() => <Redirect to="/home" />}/>
          </Switch>
        </BrowserRouter>
      </div>
    </UserContext.Provider>
  );
}

export default App;
