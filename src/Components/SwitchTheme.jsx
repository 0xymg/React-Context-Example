import { useContext } from "react"
import SiteContext, { useSite } from "../context/SiteContext"; 



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