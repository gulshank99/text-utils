import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
   <>
   
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-$(props.mode)`}>
      <a className="navbar-brand"  href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"       aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"></span>
      </button>

     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link"  href="/">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link"  href="/">{props.about}</a>
      </li> 
    </ul>
     
     
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode</label>
     </div>

  </div>
  
</nav> 
   </>
  )
}

Navbar.prototypes={
  title:PropTypes.string.isRequired,
 // title:PropTypes.string,
  about:PropTypes.string
}

//Default props 
Navbar.defaultProps={
    title:'Set title',
    aboutText:'AboutUs'
};
