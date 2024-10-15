import { memo } from "react";
import SwitchTheme from "./SwitchTheme";
import SwitchLanguage from "./SwitchLanguage";
import { useAuth }  from "../context";


function Header() {
  const {user, setUser} = useAuth();

  const login = () => {
    setUser({
      username: 'ymg'
    })
  }

  const logout = () => {
    setUser(false)
  }


  return (
    <header>
      Header: {user && <>
        {user.username} <br/>
        <button onClick={logout}>Logout</button> 
      </> || <button onClick={login}>Login</button> }

      <br />
      <SwitchTheme ></SwitchTheme>
      <SwitchLanguage ></SwitchLanguage>


    </header>
  )
}

export default memo(Header)