import React, {useState} from 'react'
 
export default function TextForm(props) {

    const[text,setText]=useState('Enter here'); 

    const handleUpClick=  ()=>{ 
    let newText = text.toUpperCase();
    setText(newText);
   }

   const handleLoClick=  ()=>{ 
    let newText = text.toLowerCase();
    setText(newText);
   } 

   const handleClaerClick=  ()=>{ 
    setText("");
   } 
   
   const handleOnChange=  (event)=>{ 
    setText(event.target.value);
   }

   const handleCopy=()=>{
    var textContent = document.getElementById("myBox");
    textContent.select();
    navigator.clipboard.writeText(textContent.value);
   }

   const handleSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "))
   }
  
  return ( 
    <>  
 
  <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading}</h1> 
    <textarea className="form-control mb-3" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='light'?'black':'white'}}></textarea>
    
    <button className="btn btn-primary m-1" onClick={handleUpClick}>Convert to UpperCase</button> 
    <button className="btn btn-primary m-1" onClick={handleLoClick}>Convert to LowerCase</button> 
    <button className="btn btn-primary m-1" onClick={handleClaerClick}>Clear</button> 
    <button className="btn btn-primary m-1" onClick={handleCopy}>Copy all</button> 
    <button className="btn btn-primary m-1" onClick={handleSpaces}>Remove Extra Spaces</button>  

  </div>

  <div className="container my-3"  style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Your Text Data</h2>
    <p>{text.split(" ").length} words   {text.length} characters   sentences {text.split(".").length-1}</p>
    <p>Takes {0.008* text.split(" ").length} Minutes to read this</p> 
    <h2>Preview</h2>
    <p>{text}</p>
  </div>

   
    </>
  )
}
