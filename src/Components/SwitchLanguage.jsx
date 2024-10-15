import { useContext } from "react"
import SiteContext, {useSite} from "../context/SiteContext"; 


function SwitchLanguage() {
    const { language, setLanguage} = useSite()

    return (
        <>
            <br /> Language: {language} <br />
            <button onClick={() => setLanguage(language === 'TR' ? 'US' : 'TR')} >Change Language</button>
            <hr />
        </>
    )
}

export default SwitchLanguage