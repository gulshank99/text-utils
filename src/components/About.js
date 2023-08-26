import React, {useState} from 'react'

export default function About(props) {
 

 const [myStyle,setMyStyle]= useState({
    color:'white',
    background:'black'
   })

   const[btntxt,setBtnText]=useState("Enable Light Mode")
   
   const toggleStyle = ()=>{
    if(myStyle.color==='white'){
      setMyStyle({
        color:'black',
        background:'white'
        
      })
      setBtnText("Enable Dark Mode")
    }else{
      setMyStyle({
        color:'white',
       background:'black' 
      })
      setBtnText("Enable Light Mode");
    }
   }

   return (
    <> 
    <div className="container mt-2"  style={myStyle}  id="accordion">
       <div className="card"  style={myStyle}>
         <div className="card-header" id="headingOne"  style={myStyle}>
           <h5 className="mb-0"   >
           <button className="btn btn-link"  data-toggle="collapse" data-target="#collapseOne"  aria-expanded="true" aria-controls="collapseOne">
            {props.data}
           </button>
           </h5>
         </div>
 
         <div id="collapseOne" className="collapse show" aria-labelledby="headingOne"    data-parent="#accordion">
           <div className="card-body">
           Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
          </div>
        </div>
      </div>
   </div> 

    <div className="Container "  >
       <button className="btn btn-primary m-1" onClick={toggleStyle} type="button" style={myStyle}>{btntxt}</button> 
    </div>

    </>
  )
}
