import React, {useState} from 'react'
import LoginForm from './LoginForm/LoginForm'
import './Login.css'
const axios = require('axios');

//We need to provice reference to the application user
//in order to store the token accross the entire service.
//usage: <Login appUser={user}> </Login>
function Login({appUser}) {
    const [user, setUser] = useState({name: ""});
    const [error, setError] = useState("");
    
    const Login = (details) => {
        //Posting credentials to the web server to authenticate user
        axios.post('http://localhost:5000/login',{str: ""}, {auth: {username: details.email, password: details.password}})
        .then(res => {
            if (res.data !== null)
            {
                
                console.log(res);
                //if login was succesfull, retrieve the token and assing it to the user
                appUser.token = res.data;

                console.log(appUser);
                setUser({name: res.name})
            }
            else
            {
                setError("Wrong username or password, try again");
            }
        });
    }
    
    const Logout = () =>
    {
        console.log("logout");
        setUser({name:""});
        appUser.token = "";
        console.log(appUser);
    }
    return (  
    <div className="Login">
    {(user.name !== "") ? 
    (
        <div className="welcome">
            <h2>
                Welcome,
                <span>
                    {user.name}
                    <button onClick={Logout}>
                        Logout
                    </button>
                </span>
            </h2>
        </div>
    ) :
    (
        <LoginForm Login={Login} error={error}/>
    )}
    </div>
    )
}

export default Login
