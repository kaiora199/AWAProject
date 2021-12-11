import './CreateUser.css';
import React from 'react';
import CreateUserForm from './CreateUserForm/CreateUserForm';
const axios = require('axios');
const hasha = require('hasha');



export default function CreateUser() {

    const uploadUser = (userDetails) => {
        console.log("here");
        console.log(userDetails);
        
        //Create user if details submitted are nonexistent.
        if(userDetails.Name !== "" && userDetails.email !== "" && userDetails.password !== "")
        {
            console.log("user field not empty");
            const uploadUser = {
                //Create a copy of user with hashed password
                name: userDetails.name,
                email: userDetails.email,
                password: hasha(userDetails.password, {algorithm: "sha256"})
            }

            console.log(uploadUser);
            axios.post("http://localhost:5000/users", uploadUser)
            .then(
                response =>
                {
                    console.log(response);
                }
            );
        }
    }
    
    return (
        <div className = "CreateUser">
            <CreateUserForm UserHandler={uploadUser}>

            </CreateUserForm>
        </div>
    )
}
