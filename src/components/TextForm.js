import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Hasan is Awesome");
  const PrintUpperCase = () => {
    console.log("Function Clicked");
    let UpperCase = text.toUpperCase();
    setText(UpperCase);
    props.showalert("Converted to Upper Case","success")
  };
  

  const PrintUpperCaser = (event) => {
    console.log("Function Change Clicked");
    setText(event.target.value);
  };
  return (
    <>
      <div>
        <h1 style={{color: props.mode==='dark'?'white':'#45124D'}}>{props.heading}</h1>
        <div className="mb-3" style={{color: props.mode==='dark'?'white':'#45124D'}}>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter Text Here
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={text}
            onChange={PrintUpperCaser}
            style={{backgroundColor: props.mode==='light'?'white':'grey', color: props.mode==='dark'?'white':'#45124D'}}
          />
          <div id="emailHelp" className="form-text" style={{color: props.mode==='dark'?'white':'#45124D'}}>
            Enter Text Carefully.
          </div>
        </div>
        <button className="btn btn-primary mx-4" onClick={PrintUpperCase}>
          Convert to Upper Case
        </button>
      </div>
      <div className="container my-5" style={{color: props.mode==='dark'?'white':'#45124D'}}>
        <h1>Your Text Summary</h1>
        <p>
          There are {text.length} characters and {text.length>0 ?text.split(" ").length:0} Words
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter Text to See Preview"}</p>
      </div>
    </>
  );
}
