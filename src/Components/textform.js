import React,{useState} from 'react'
import PropTypes from 'prop-types'

export default function Textarea(props) {
    const handleClick=()=>{
        // window.alert("button clicked");
        const newText=text.toUpperCase();
        settext(newText);
        console.log("inside component");
        props.callFromParent("hi");
        
    }
    const handleClick2=()=>{
        // window.alert("button clicked");
        const newText=text.toLowerCase();
        settext(newText);
    }
    const handleClick3=()=>{
        // window.alert("button clicked");
        const newText=text.toUpperCase();
        settext(newText);
    }
    const handleClick4=()=>{
        // window.alert("button clicked");
        const newText=("");
        settext(newText);
    }
    const handleClick5=()=>{
        // window.alert("button clicked");
        const newText=text.split("").reverse().join("");
        settext(newText);
    }
    const handleClick6=()=>{
        // window.alert("button clicked");
        return text.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
        // settext(newText);
    }
    const handleClick7=()=>{
        // window.alert("button clicked");
        var text=document.getElementById('textbox');
        text.select();
        navigator.clipboard.writeText(text.value);
        // settext(newText);
    }
    const handleClick8=()=>{
        var newtext=text.split(/[ ]+/);
        settext(newtext.join(" "));
    }
    const handleChange=(event)=>{
        settext(event.target.value);
    }
    const handleClick0=()=>{
        settext('');
    }
     const [text,settext]=useState('');
    // const [text,settext]=useState('Enter your text');
    return(
        <>
        <h1>{props.heading}</h1>
        <div className="form-floating" >
            {/* onChange handler is important if we need to change something */}
            <textarea  value={text} onChange={handleChange} rows="8" placeholder='enter text' id='textbox' style={{backgroundColor : props.mode==='light' ?'white' :'gray' , color : props.mode==='light' ? 'black' : 'white' } }/>
      </div>
      <button disabled={text.length===0} className={`btn btn-${props.mode==='light' ? 'primary': 'dark'} my-2`} onClick={handleClick0}>Clear</button>
      <br/>
      <button disabled={text.length===0} className={`btn btn-${props.mode==='light' ? 'primary': 'danger'} my-2`} onClick={handleClick}>ToUpperCase</button>
      <br/>
      <button disabled={text.length===0} className={`btn btn-${props.mode==='light' ? 'primary': 'dark'} my-2`} onClick={handleClick2}>ToLowerCase</button>
      <br/>
      <button disabled={text.length===0} className={`btn btn-${props.mode==='light' ? 'primary': 'danger'} my-2`} onClick={handleClick3}>ToCapitalCase</button>
      <br/>
      <button disabled={text.length===0} className={`btn btn-${props.mode==='light' ? 'primary': 'dark'} my-2`} onClick={handleClick4}>Clear</button>
      <br/>
      <button disabled={text.length===0} className={`btn btn-${props.mode==='light' ? 'primary': 'danger'} my-2`} onClick={handleClick5}>Reverse</button>
      <br/>
      <button disabled={text.length===0} className={`btn btn-${props.mode==='light' ? 'primary': 'dark'} my-2`} onClick={handleClick6}>Email extractor</button>
      <br/>
      <button disabled={text.length===0} className={`btn btn-${props.mode==='light' ? 'primary': 'danger'} my-2`} onClick={handleClick7}>Copy text</button>
      <br/>
      <button disabled={text.length===0} className={`btn btn-${props.mode==='light' ? 'primary': 'dark'} my-2`} onClick={handleClick8}>Remaove Extra space</button>
      
      <div className='container '>
        
        <h1>
          Your text summary
        </h1>
        <p className='my2'>
            
          {text.split(" ").filter((element)=>{return element.length!=0}).length } words and {text.length} characters were added also if one word needs 0.008 sec of time so time needed for your
          text is {(0.008)*text.split(" ").filter((element)=>{return element.length!==0}).length} sec
        </p>

        <br/>
        <h2>
            Preview of your text
        </h2>
        <p>
            {text.length>0? text: "Your entered text can be seen here"}
        </p>
      </div>
      </>
      
    )
}