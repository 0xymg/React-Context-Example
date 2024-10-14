import { memo } from "react";
import SwitchTheme from "./SwitchTheme";
import SwitchLanguage from "./SwitchLanguage";


function Header() {
  return (
    <header>
      Header
      <SwitchTheme ></SwitchTheme>
      <SwitchLanguage ></SwitchLanguage>


    </header>
  )
}

export default memo(Header)