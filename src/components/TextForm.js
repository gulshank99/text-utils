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
  
  return ( 
    <>  

  <div className="container">
    <h1>{props.heading}</h1> 
    <textarea className="form-control mb-3" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    <button className="btn btn-primary m-1" onClick={handleUpClick}>Convert to UpperCase</button> 
    <button className="btn btn-primary m-1" onClick={handleLoClick}>Convert to LowerCase</button> 
    <button className="btn btn-primary m-1" onClick={handleClaerClick}>Clear</button> 
    



  </div>

  <div className="container my-3">
    <h2>Your Text Data</h2>
    <p>{text.split(" ").length} words   {text.length} characters   sentences {text.split(".").length-1}</p>
    <p>Takes {0.008* text.split(" ").length} Minutes to read this</p>


    <h2>Preview</h2>
    <p>{text}</p>
  </div>

   
    </>
  )
}
