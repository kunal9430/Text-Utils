import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

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
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
        </ul>
          {/* <div className="d-flex" style={{flexDirection:'row',}}>
            <div className="bg-primary rounded mx-2 my-1" style={{height:'30px', width:'30px', cursor: 'pointer',}} onClick={()=>{props.toggleMode('primary')}}></div>
          </div>
          <div className="d-flex">
            <div className="bg-danger rounded mx-2 my-1" style={{height:'30px', width:'30px', cursor: 'pointer',}} onClick={()=>{props.toggleMode('danger')}}></div>
          </div>
          <div className="d-flex">
            <div className="bg-success rounded mx-2 my-1" style={{height:'30px', width:'30px', cursor: 'pointer',}} onClick={()=>{props.toggleMode('success')}}></div>
          </div>
          <div className="d-flex">
            <div className="bg-warning rounded mx-2 my-1" style={{height:'30px', width:'30px', cursor: 'pointer',}} onClick={()=>{props.toggleMode('warning')}}></div>
          </div>
          <div className="d-flex">
            <div className="bg-light rounded mx-2 my-1" style={{height:'30px', width:'30px', cursor: 'pointer', border:'2px solid Gray'}} onClick={()=>{props.toggleMode('light')}}></div>
          </div>
          <div className="d-flex">
            <div className="bg-dark rounded mx-2 my-1" style={{height:'30px', width:'30px', cursor: 'pointer',border:'2px solid Gray'}} onClick={()=>{props.toggleMode('dark')}}></div>
          </div> */}
        <div className={`form-check form-switch text-${props.mode==='dark'?'light':'dark'} mx-2 my-1 my-1`}>
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?"Enable Dark Mode":"Enable Light Mode"}</label>
      </div>
        {/* Button for more Themes */}
          <button type="button" className={`btn ${props.mode==='dark'?'btn-outline':'btn'}-primary my-1 mx-3`} onClick={handelDarkMode1}>Primary</button>
          <button type="button" className={`btn ${props.mode==='dark'?'btn-outline':'btn'}-secondary my-1 mx-3`}  onClick={handelDarkMode2}>Secondary</button>
          <button type="button" className={`btn ${props.mode==='dark'?'btn-outline':'btn'}-success my-1 mx-3`}  onClick={handelDarkMode3}>Success</button>
          <button type="button" className={`btn ${props.mode==='dark'?'btn-outline':'btn'}-danger my-1 mx-3`}  onClick={handelDarkMode4}>Danger</button>
          <button type="button" className={`btn ${props.mode==='dark'?'btn-outline':'btn'}-warning my-1 mx-3`}  onClick={handelDarkMode5}>Warning</button>
      </div>
    </div>
  </nav>  
  )
}

Navbar.propTypes ={title: PropTypes.string,
                  aboutText: PropTypes.string,
}
