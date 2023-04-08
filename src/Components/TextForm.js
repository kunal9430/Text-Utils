import React, {useState} from 'react'
console.log()

export default function TextForm(props) {
    const [text, setText] = useState("Enter the text here");
    const handelUpClick = ()=>{
        console.log("Upper case was clicked");
        const newText = text.toUpperCase();
        setText(newText);
        props.showAlert(" : Converted to Upper case", "success")
    }
    const handelLoClick = ()=>{
        console.log("Lower case was clicked");
        const newText = text.toLowerCase();
        setText(newText);
        props.showAlert(" : Converted to Lower case", "success")

    }
    const handelOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
   
    const handelEmailExtractor=()=>{
        let arr = text.split(" ");
        let i=0;
        let email="";
        arr.forEach(element => {
            if(element.includes("@gmail.com") || element.includes("@GMAIL.COM") || element.includes(".co.in")|| element.includes(".CO.IN")){
                email=email+"\n"+element
                 i++;
            }
        });
        if(i===0){
            props.showAlert(" : No Email-id present", "warning")
        }
        else{
            email=email.trimStart();
            setText(email);
            console.log("total"+i);
            props.showAlert(" : All email id has been extracted", "success")
        }

    }

    const handelClearText =()=>{
        console.log("clear text");
        setText('');
        props.showAlert(" : Cleared text", "success")
    }

    const handelCopy = () =>{
        console.log("Handel copy is clicked!");
        try{    
            setText(text.trim());
            navigator.clipboard.writeText(text);
            // document.getSelection().removeAllRanges();
            props.showAlert(" : Copy to Clipboard!", "success");
       } catch(err) {  
            props.showAlert(" : Unable to copy..!","danger");
       }  
    }

    const handelExtraSpace = () =>{
        let newText = text.split(/[ ]+/); //USE OF RAJEX IN JAVASCRIPT
        setText(newText.join(" "))
    }
   

  return (
    <>
        <div className='container'>
            <h1 style={props.mode==='dark'?{color:'white'}:{color:'black'}} className='mb-4'>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id="myBox" rows="10" value={text} onChange={handelOnChange} style={props.mode==='dark'?{backgroundColor:'#13466e', color:'white'}:{backgroundColor:'white', color:'black'}}></textarea>
            </div>
            <button disabled={text.length===0} className='btn btn-primary my-2 mx-3' onClick={handelUpClick}>Convert to Upper Case</button>
            <button disabled={text.length===0} className='btn btn-primary my-2 mx-3' onClick={handelLoClick}>Convert to Lower Case</button>
            <button disabled={text.length===0} className='btn btn-primary my-2 mx-3' onClick={handelEmailExtractor}>Extract Email</button>
            <button disabled={text.length===0} className='btn btn-primary my-2 mx-3' onClick={handelClearText}>Clear Text</button>
            <button disabled={text.length===0} className='btn btn-primary my-2 mx-3' onClick={handelCopy} id='clipboardCopy'>Copy Text</button>
            <button disabled={text.length===0} className='btn btn-primary my-2 mx-3' onClick={handelExtraSpace}>Remove Extra Space</button>

        </div>
        <div className="container my-3" style={props.mode==='dark'?{color:'white'}:{color:'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").filter((element)=>{return element.length!==0;}).length} words and {text.length} charecters</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0;}).length} Minutes read</p>
            <h2>Your text Preview</h2>
            <p>{text.length>0?text:"Nothing to Preview...!"}</p>

        </div>
    </>
  )
}


