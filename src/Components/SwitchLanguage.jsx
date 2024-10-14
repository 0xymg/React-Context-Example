import { useContext } from "react"
import SiteContext from "../context/SiteContext"; 


function SwitchLanguage() {
    const { language, setLanguage} = useContext(SiteContext)

    return (
        <>
            <br /> Language: {language} <br />
            <button onClick={() => setLanguage(language === 'TR' ? 'US' : 'TR')} >Change Language</button>
            <hr />
        </>
    )
}

export default SwitchLanguage