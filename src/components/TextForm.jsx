import React , {useState} from 'react'

export default function TextForm(props) {
  
  const [Text, setText]=useState("");

  const handelUpClick= () =>{
    let newText=Text.toUpperCase();
    setText(newText);
  }

  const handelLoClick = () =>{
let newText=Text.toLowerCase();
setText(newText);
  }

  const handelClearClick = () =>{
    let newText=""
    setText(newText);
  }

  const handelOnChange= (event)=>{
    setText(event.target.value);
  }
 const handelCopy =()=>{
  let  text =document.getElementById("myBox");
 text.select();
 navigator.clipboard.writeText(text.value);
 }
 const handelExtraSpaces=()=>{
 let newText= Text.split(/[ ]+/);
 setText(newText.join(" "));
 }
  
  return (
    <>
    <div className='container' >
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control " value={Text} onChange={handelOnChange}style={{ borderWidth: '8px' }} id="myBox" rows="8"></textarea>
      </div>

      <button className="btn btn-primary me-2"  onClick={handelUpClick} >Convert To Uppercase</button>
      <button className='btn btn-primary mx-2'  onClick={handelLoClick} > Convert To Lowercase </button>
      <button className="btn btn-primary mx-2" onClick={handelExtraSpaces}>Remove Extra Spaces</button>
      <button className=" btn btn-primary mx-2" onClick={handelClearClick}> Clear Text</button>
      <button className="btn btn-primary mx-2" onClick={handelCopy}>Copy Text</button>
     </div>

    <div className='cotainer my-3' >
      <h2>Your Text Summary </h2>
      <p>{Text.split(" ").length -1} Words , {Text.length} Characters</p>
      <p>{0.008 * Text.split(" ").length}</p>
      <h2>Preview</h2>
      <p>{Text}</p>
    </div>
    </>
  );
}