import './App.css';
import SiteProvider from './context/SiteContext';
import Home from './Components/Home';

function App() {

 
  
  return (
    <SiteProvider>
    <Home></Home>
    </SiteProvider>
  );
}

export default App;
