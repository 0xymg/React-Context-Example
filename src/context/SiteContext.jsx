import { createContext, useContext, useState } from "react";

const Context = createContext();

const Provider = ({children}) => {

    const [theme, setTheme] = useState('light');
    const [language, setLanguage] = useState('TR');  
   
    const providedData = {
      theme, 
      setTheme,
      language,
      setLanguage
    }


    return(
        <Context.Provider value={providedData}>
            {children}
        </Context.Provider>
    )
}

export const useSite = () => useContext(Context)


export default Provider;