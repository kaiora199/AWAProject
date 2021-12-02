import React, {useState} from 'react'
import CreateUser from '../CreateUser';


export default function CreateUserForm({UserHandler}) {
    const [details, setDetails] = useState({name: "", email: "", password: "", address: ""});

    const submitHandler = e => {
        e.preventDefault();
        console.log("handler");
        UserHandler(details);
    }
    return (
        <div className = "createUserInner">
            <form onSubmit={submitHandler}>
                <div className="form-inner">
                    <h2>Create a new user</h2>
                    {/*ERROR GOES HERE*/}
                    <div className="form-group">
                        <label htmlFor="name">Full Name:</label>
                        <input type="text" name="name" id="create-name" onChange={e=>{setDetails({...details, name: e.target.value})}} value={details.name}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="address">Address:</label>
                        <input type="email" name="email" id="create-email" onChange={e=>{setDetails({...details, email: e.target.value})}} value={details.address}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="create-email" onChange={e=>{setDetails({...details, email: e.target.value})}} value={details.email}></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="create-password" onChange={e=>{setDetails({...details, password: e.target.value})}} value={details.password}></input>
                    </div>
                    <input type="submit" value="Create a new user"></input>
                </div>
            </form>
        </div>
    )
}
