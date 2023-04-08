import React, {useState} from "react";


export default function About(props) {
  // const [myStyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white',
  // })

  // const [btnText, setBtnText] = useState("Enable dark mode");
  // 
  // const toggleStyle =()=>{
  //   if(myStyle.color==='black')
  //     {
  //       setMyStyle({
  //         color: 'white',
  //         backgroundColor: 'black',
  //         border: '2px solid red',
  //       })
  //       setBtnText("Enable light mode");
  //     }
  //     else{
  //       setMyStyle({
  //         color: 'black',
  //         backgroundColor: 'white',
  //       })
  //       setBtnText("Enable dark mode");
  //     }
    
  // }
  let myStyle ={
    color:props.mode==='dark'?'white':'black',
    backgroundColor:props.mode==='dark'?'#042743':'white',
  }

  return (
    <div className="container my-3" style={myStyle}>
        <h1>About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
                Textutils gives you a way to analyze your text quickly and efficiently. So it word count or 
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
              TextUtils is a free counter tool that provides instant character coundt and word cound statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
             <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={myStyle}>
                This word counter software work in any web browsers such as chrome, firefox, internet Explorer, saafari, opera. It suits to count characaters in facebook, blog books, excel document, pdf document, essays, etc,,
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
