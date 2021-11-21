import React, {useState} from 'react'
import LoginForm from './LoginForm/LoginForm'
import './Login.css'
import * as api from '../awaAPI/index';


function Login() {
    const adminUser=
    {
        email: "admin@admin.com",
        password: "password"
    }
    
    const [user, setUser] = useState({name:"", email:""});
    const [error, setError] = useState("");
    
    const Login = (details) => {
        console.log(details);
    }
    
    const Logout = () =>
    {
        console.log("logout");
    }
    return (  
    <div className="Login">
    {(user.email != "") ? 
    (
        <div className="welcome">
            <h2>
                Welcome,
                <span>
                    {user.name}
                    <button>
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
