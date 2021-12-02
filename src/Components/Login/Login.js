import React, {useState} from 'react'
import LoginForm from './LoginForm/LoginForm'
import './Login.css'
const axios = require('axios');



function Login() {
    const adminUser=
    {
        email: "admin@admin.com",
        password: "password"
    }
    
    const [user, setUser] = useState({email:"", password: ""});
    const [error, setError] = useState("");
    
    const Login = (details) => {
        console.log("trying to log in with details: " + details);

        axios.post('http://localhost:5000/login',{str: ""}, {auth: {username: details.email, password: details.password}})
        .then(res => console.log(res));

        if(details.email == adminUser.email && details.password == adminUser.password)
        {
            console.log("logged in!");
            setUser({name:details.name, email:details.email})
        }
        else{
            setError("Details do not match!");
        }
    }
    
    const Logout = () =>
    {
        console.log("logout");
        setUser({name:"", email:""})
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
