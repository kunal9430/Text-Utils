import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import { useState }  from 'react';
import Alert from './Components/Alert';
import About from './Components/About';
// To use react router use:
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


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
//  const removeBodyClasses=()=>{
//   document.body.classList.remove('bg-primary');
//   document.body.classList.remove('bg-dark');
//   document.body.classList.remove('bg-light');
//   document.body.classList.remove('bg-danger');
//   document.body.classList.remove('bg-warning');
//   document.body.classList.remove('bg-success');
//  }
 const toogleMode = () =>{
  // console.log(cls);
  // removeBodyClasses();
  // document.body.classList.add('bg-'+cls);
  // showAlert(" : Mode is selected",cls);
  if(mode==='light'){
   console.log("Dark Mode Enabled");
   setMode("dark");
   document.body.style.backgroundColor='#042743';
   showAlert(" :  Dark mode has been enabled", "success");
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
   showAlert(" :  Light mode has been enabled", "success");
  //  document.title = 'TextUtils-Light Mode';

  }
}

  return (

  <Router>
    {/* navbar */}
    <Navbar title="TextUtils" aboutText="About TextUtils" mode = {mode} toggleMode={toogleMode} setMode={setMode} showAlert={showAlert} />

    {/* Alert  */}
    <div style={{height:'50px'}}>
    <Alert alert={alert}/>
    </div>

    {/* using react router */}
    
    <div className="container my-3">
          <Routes>
            {/* About */}
            <Route exact path='/about' element={<About mode={mode}/>}/>
            <Route exact path='/' element={<TextForm heading="Try Text-Utils- Word Counter, Character Counter, Remove Extra Space" mode={mode} showAlert={showAlert}/>}/>
          </Routes>
                
                
    </div>
          
  </Router>


  );
  }

export default App;
