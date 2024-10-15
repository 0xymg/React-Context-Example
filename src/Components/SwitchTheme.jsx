import { useContext } from "react"
import { useSite } from "../context"; 



function SwitchTheme() {
  const { theme, setTheme} = useSite()
  return (
    <>

      Theme: {theme} <br />
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} >Change Theme</button>

    </>
  )
}

export default SwitchTheme