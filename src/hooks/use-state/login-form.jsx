import React, { useState } from "react";

export const LoginForm = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = () => {
        if (userName === "admin" && password === "admin") {
            setIsLoggedIn(true);
        }
    };

    return (
        <div>
            <h1>Login Form</h1>
            <input 
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)} 
                placeholder="Enter username"
            />
            <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
            />
            <button 
                onClick={login} 
                disabled={!userName || !password} 
            >
                Login
            </button>
            {isLoggedIn && <p>Welcome, {userName}!</p>}
        </div>
    );
};
