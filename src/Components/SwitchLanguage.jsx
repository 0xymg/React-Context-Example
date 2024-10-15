import { useContext } from "react"
import SiteContext, {Context} from "../context/SiteContext"; 


function SwitchLanguage() {
    const { language, setLanguage} = useContext(Context)

    return (
        <>
            <br /> Language: {language} <br />
            <button onClick={() => setLanguage(language === 'TR' ? 'US' : 'TR')} >Change Language</button>
            <hr />
        </>
    )
}

export default SwitchLanguage