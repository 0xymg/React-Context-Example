import { useContext } from "react"
import SiteContext, {Context} from "../context/SiteContext"; 



function SwitchTheme() {
  const { theme, setTheme} = useContext(Context)
  return (
    <>

      Theme: {theme} <br />
      <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} >Change Theme</button>

    </>
  )
}

export default SwitchTheme