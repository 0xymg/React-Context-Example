import './App.css';
import { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import SiteContext from './context/SiteContext';
import Home from './Components/Home';

function App() {

  const [theme, setTheme] = useState('light');
  const [language, setLanguage] = useState('TR');  
 
  const providedData = {
    theme, 
    setTheme,
    language,
    setLanguage
  }
  
  return (
    <SiteContext.Provider value={providedData}>
      <Home></Home>
    </SiteContext.Provider>
  );
}

export default App;
