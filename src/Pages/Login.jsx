import React from 'react'
import { useAuth } from '../AuthContext'
import { Navigate } from 'react-router-dom';

function Login() {
    const {user, setUser} = useAuth(); 

    const login = () => {
        setUser({
            username: "ymg"
        })
    }

    if(user) {
        return (
            <Navigate to="/" />
        )
    } else {
        return(
            <div>
                <button onClick={login}>LogIn</button>
            </div>
        )
    }
    


}

export default Login