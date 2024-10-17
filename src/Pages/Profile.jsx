import React from 'react'
import { useAuth } from '../AuthContext'

function Profile() {
    const {setUser} = useAuth()
    const logout = () => {
        setUser(false)
    } 
  return (
    <div>
        Profile
        <hr />
        <button onClick={logout}>Log out</button>
    </div>
  )
}

export default Profile