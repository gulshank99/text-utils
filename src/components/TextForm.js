import React, {useState} from 'react'

 
export default function TextForm(props) {

    const[text,setText]=useState('Enter text here');
   // setText("new text");
   const handleUpClick=  ()=>{
   // console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
   }

   const handleOnChange=  (event)=>{
    console.log("OnChange was clicked");
    setText(event.target.value);
   }

    
    
  return ( 
    <>  

  <div className="form-group">
    <h1>{props.heading}</h1> 
    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  </div>
  <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
 
    </>
  )
}
