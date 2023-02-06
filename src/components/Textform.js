import React,{useState} from 'react'

export default function Textform(props) {
    const handleupclick=()=>{
        console.log("uppercase clicked"+ text); 
        let newText=text.toUpperCase(); 
        setText(newText)
      props.showalert("Converted to uppercase","succes");
      }
        const handleloclick=()=>{
          console.log("lowercase clicked"+ text); 
          let newText=text.toLowerCase(); 
          setText(newText)
          props.showalert("Converted to lowercase","succes");}
          const handleclearclick=()=>{
            console.log("clearclick clicked"+ text); 
            let newText=''; 
            setText(newText)
          
          }  
    
    const handleOnChange=(event)=>{
        console.log("on changed");
        setText(event.target.value);
    }
   
    const[text,setText]= useState(' ');
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
    <textarea className="form-control" value={text} onChange={handleOnChange}style=
     {{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}}
      id="mybox" rows="9"></textarea>
    
  </div>
  <button className="btn btn-primary mx-2" onClick={handleupclick}>  uppercase</button>
  <button className="btn btn-primary mx-2" onClick={handleloclick}>  lowercase</button>
  <button className="btn btn-primary mx-2" onClick={handleclearclick}>  ClearText</button>

    </div>
    <div className="container my-3"style={{color: props.mode==='dark'?'white':'black'}}>
      <h3>Your Text Summary</h3>
      <p>{text.split(" ").length}words and {text.length}characters</p>

    </div>
    </>
  )
}
