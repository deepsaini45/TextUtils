import React ,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick =()=>{
        // console.log('Uppercase was clicked');
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success");
        
    }
    const handleLowClick =()=>{
        // console.log('lowercase was clicked');
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("converted to lowercase","success");
        
    }
    const clearText =()=>{
        // console.log('text clear');
        let newText='';
        setText(newText);
        props.showAlert("text cleared","success");
        
    }
    const handleCopy=()=>{
        var text=document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("text copied","success");
    }
    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(' '));
        props.showAlert("removed extra space","success");
    }
    const handleOnChange=(event)=>{
        // console.log('on change');
        setText(event.target.value);
    }
    const [text, setText] = useState('');
  return (
   <>
   <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
   <h2>{props.heading}</h2>
 <div className="mb-3" >
   <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
   </div>
   <button className="btn btn-primary my-3 mx-1 "onClick={handleUpClick}>Convert to Uppercase</button>
   <button className="btn btn-primary my-3 mx-1 "onClick={handleLowClick}>Convert to lowercase</button>
   <button className="btn btn-primary my-3 mx-1 "onClick={clearText}>Clear text</button>
   <button className="btn btn-primary my-3 mx-1 "onClick={handleCopy}>Copy</button>
   <button className="btn btn-primary my-3 mx-1 "onClick={handleExtraSpaces}>Remove Extra Spaces</button>
 </div>
 <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Your text summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!=0 }).length} words and {text.length} characters </p>
    <p> {0.008*text.split(" ").filter((element)=>{return element.length!=0 }).length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
 </div>
 </>
  )
}
