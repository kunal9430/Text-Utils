import './App.css';
import Navbar from './Components/Navbar';
// import TextForm from './Components/TextForm';
import { useState }  from 'react';
import Alert from './Components/Alert';
import About from './Components/About';
// To use react router use:
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";


function App() {
 const [mode, setMode] = useState("light")
 const [alert, setAlert] = useState(null)
 const showAlert = (message, type) =>{
      setAlert({
        msg: message,
        type: type
      })

      setTimeout(() => {
        setAlert(null);
      }, 1500);
 }
 const toogleMode = () =>{
  if(mode==='light'){
   console.log("Dark Mode Enabled");
   setMode("dark");
   document.body.style.backgroundColor='#042743';
   showAlert(" :  Dark mode has been enabled", "success")
  //  document.title = 'TextUtils-Dark Mode';
  //  setInterval(()=>{
  //   document.title = "TextUtil is amazing...";
  //  },2000);
  //  setInterval(()=>{
  //   document.title = "Download TextUtils...";
  //  },1500);
  }
  else{
   console.log("Light Mode Enabled")
   setMode("light")
   document.body.style.backgroundColor='white';
   showAlert(" :  Light mode has been enabled", "success")
  //  document.title = 'TextUtils-Light Mode';

  }
}

  return (
<>
  {/* // <Router> */}
    {/* navbar */}
    <Navbar title="TextUtils" aboutText="About TextUtils" mode = {mode} toggleMode={toogleMode} setMode={setMode} showAlert={showAlert} />

    {/* Alert  */}
    <div style={{height:'50px'}}>
    <Alert alert={alert}/>
    </div>

    {/* using react router */}
    
     
          {/* <Routes> */}
            {/* About */}
            {/* <Route exact path='/about' element={<About/>}/> */}
            {/* <Route exact path='/' element={<TextForm heading="Enter your text here..!" mode={mode} showAlert={showAlert}/>}/> */}
          {/* </Routes> */}
          {/* </Routes> */}
          {/* <div className="container my-3">
          <TextForm heading="Try Text-Utils- Word Counter, Character Counter, Remove Extra Space" mode={mode} showAlert={showAlert}/>
        </div> */}
        <About mode={mode}/>
  {/* // </Router> */}

  </>
    
  );
}

export default App;
