import React, { useState, useContext } from "react";
import { AccountContext } from './Account';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { authenticate } = useContext(AccountContext);

    const onSubmit = (event) => {
        event.preventDefault();

        authenticate(email, password)
            .then(data => {
                console.log("Logged In !", data);
            })
            .catch(err => {
                console.error("Failed to Login !!", err);
            });
    };

    return (
        <div>
            <h1>Login Form</h1>
            <form onSubmit={onSubmit}>
                <label htmlFor="email">Email: </label>
                <input 
                    value={email} 
                    onChange={(event) => setEmail(event.target.value)}
                ></input><br></br>
                <label htmlFor="password">Password: </label>
                <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                ></input><br></br>

                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;