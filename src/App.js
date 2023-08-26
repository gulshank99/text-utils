 
import './App.css';
import About from './components/About';
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const[mode,setMode]=useState('light');    // Whether dark mode is enabled or not

  const toggleMode=()=>{
       if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor = '#042743';
       }else{
        setMode('light');
        document.body.style.backgroundColor = 'white';
      }
  } 
  return (
   <>  
  <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>

  <div className="container">
  <TextForm heading="Enter Text Below to analyze" mode={mode}/>
  </div>
  
  <div className="container">
  <About data="About Us" />
  </div>
   

   </>
  );
}

export default App;
