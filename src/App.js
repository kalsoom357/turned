
import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[mode,setMode]= useState('dark');
  const[alert,setAlert]= useState(null);
  const showalert = (message,type)=>{
   setAlert({
    msg: message,
    type:type
   })
   setTimeout(()=>{
    setAlert(null)
   },3000);
  }
  const toggleMode = ()=>{
if(mode=== 'light'){
  setMode('dark')
  document.body.style.backgroundColor='grey';
  showalert("Dark mode has been enabled","success")
} 
  else{
    setMode('light')
    document.body.style.backgroundColor='white';
    showalert("Light mode has been enabled","success")
  }
}

  return (
  <>
  <Router>

   <Navbar title="Turned" mode={mode} toggleMode={toggleMode}  />
   <Alert alert={alert}/>
   <div className="container my-3">
   <Routes>
          <Route exact path="/About" element={<About/>} />
         
          <Route exact path="/" element={<Textform showalert={showalert} heading="MY WORD CALCULATOR" mode={mode}/>}/>
          
    </Routes>
   </div>
   </Router>
  </>
  );
}

export default App;
