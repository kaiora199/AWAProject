import React from 'react';
import Login from './Login/Login';
import CreateUser from './CreateUser/CreateUser';

export default function LoginScreen({appUser}) {
    return (
        <div>
            <Login appUser={appUser}></Login>
            <CreateUser></CreateUser>
        </div>
    )
}
