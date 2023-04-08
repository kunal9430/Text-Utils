import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const handelDarkMode1 = () =>{
    document.body.style.backgroundColor='#71878E';
    props.showAlert(" : Primary Mode is selected","success");
    props.setMode('dark');
    
  }
  const handelDarkMode2 = () =>{
    document.body.style.background='#a8bbd9';
    props.showAlert(" : Secondary Mode is selected","success");
    props.setMode('light');
  }
  const handelDarkMode3 = () =>{
    document.body.style.background='#008080';
    props.showAlert(" : Success Mode is selected","success");
    props.setMode('dark');
  }
  const handelDarkMode4 = () =>{
    document.body.style.background='#FF4C4C';
    props.showAlert(" : Danger Mode is selected","success");
    props.setMode('dark');
    
  }
  const handelDarkMode5 = () =>{
    document.body.style.background='#AF716E';
    props.showAlert(" : Warning Mode is selected","success");
    props.setMode('dark');
  }

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="">{props.aboutText}</a>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}
        <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'}`}>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?"Enable Dark mode":"Enable Light mode"}</label>
        {/* Button for more Themes */}
      </div>
          <button type="button" className={`btn ${props.mode==='dark'?'btn-outline':'btn'}-primary my-2 mx-3`} onClick={handelDarkMode1}>Primary</button>
          <button type="button" className={`btn ${props.mode==='dark'?'btn-outline':'btn'}-secondary my-2 mx-3`}  onClick={handelDarkMode2}>Secondary</button>
          <button type="button" className={`btn ${props.mode==='dark'?'btn-outline':'btn'}-success my-2 mx-3`}  onClick={handelDarkMode3}>Success</button>
          <button type="button" className={`btn ${props.mode==='dark'?'btn-outline':'btn'}-danger my-2 mx-3`}  onClick={handelDarkMode4}>Danger</button>
          <button type="button" className={`btn ${props.mode==='dark'?'btn-outline':'btn'}-warning my-2 mx-3`}  onClick={handelDarkMode5}>Warning</button>
      </div>
    </div>
  </nav>  
  )
}

Navbar.propTypes ={title: PropTypes.string,
                  aboutText: PropTypes.string,
}
