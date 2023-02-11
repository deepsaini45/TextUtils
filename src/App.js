
import React ,{ useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

function App() {
  const [alert,setAlert]= useState(null);
  const showAlert=(message,type)=>{
   setAlert({ msg: message,
    type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  const [mode,setMode] =useState('light');
  const toggleMode=()=>{
    if(mode==='light'){
setMode('dark');
document.body.style.background='#042743';
showAlert("Dark mode has been enabled","success");
    }
    else{
      setMode('light');
      document.body.style.background='white';
      // showAlert("Dark mode has been enabled","success");
    }
  }
  return (
    
   <>
   {/* <Router> */}
   <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
   <Alert alert={alert}/>
  <div className="container my-3">
  {/* <Routes> 
          <Route path="/about"element={<About/>}/>
           
          
          <Route path="/" element={} />
          
          
        </Routes> */}
     
     <TextForm showAlert={showAlert} heading="Try TextUtils-Word Counter,Character Counter,Remove extra Spaces" mode={mode} />
     </div>
     {/* </Router> */}
   </>
  );
}

export default App;
