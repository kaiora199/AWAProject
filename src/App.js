import './App.css';
import './Components/CreateUser/CreateUser.css'
import './Components/CreateUser/CreateUser'
import './Components/TopBar/TopBar'
import TopBar from './Components/TopBar/TopBar';
import './Components/TopBar/TopBar.css';
import {useState} from 'react';
import {BrowserRouter, route, routes} from 'react-router-dom';
import LoginForm from './Components/Login/LoginForm/LoginForm';
import Login from './Components/Login/Login';
import CreateUser from './Components/CreateUser/CreateUser';

function App() {
  return (
    <div className="App">
      <TopBar>
          
      </TopBar>
      <Login></Login>
      <CreateUser></CreateUser>
    </div>
  );
}

export default App;
