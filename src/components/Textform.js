import React, {useState} from 'react'

function Textform(props) {
    const [text, setText] = useState("Enter Text Here");

    let handleClear = () => {
      setText("");
      props.showAlert("Text Cleared !!","success");
    }

    let handleUpClick = () => {
        // console.log("Button Clicked !!");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to UPPERCASE !!","success");
    }

    let handleLoClick = () => {
        // console.log("Button Clicked !!");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lowercase !!","success");
    }

    let handleOnChange = (event) => {
        // console.log("Text Changed !!");
        setText(event.target.value);
    };

    // let back = 
    // {
    //   if( props.mode === "dark")
    //   {
    //     if(props.clr === "white")
    //     {
    //       backgroundColor : "#0b1d39";
    //     }
    //     else if(props.clr === "green")
    //     {
    //       backgroundColor : "#0b4e2f";
    //     }
    //     else if(props.clr === "red")
    //     {
    //       backgroundColor : "#620b13";
    //     }
    //     else if(props.clr === "yellow")
    //     {
    //       backgroundColor : "#91700f";
    //     }
    //   }
    //   else{

    //   }
    // }
    
  return (
    <>
      <div className="container" style={{color : props.mode === "light" ? "black" : "white", backgroundColor : props.mode === "light" ? "white" : "#0b1d39"}}>
          <h1> {props.heading} </h1>
          <div className="mb-3 my-3">
          <textarea className="form-control" style={{backgroundColor : props.mode==="dark" ? "#114984" : "white", color : props.mode === "dark" ? "white" : "black"}} value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="6"></textarea>
          </div>
          <button disabled={text.length === 0} type="button" onClick={handleClear} className="btn btn-primary mx-1 my-2">Clear Text</button>
          <button disabled={text.length === 0} type="button" onClick={handleUpClick} className="btn btn-primary mx-1 my-2">Convert to Uppercase</button>
          <button disabled={text.length === 0} type="button" onClick={handleLoClick} className="btn btn-primary mx-1 my-2">Convert to Lowercase</button>
      </div>
      <div className="container my-2" style={{color : props.mode === "light" ? "black" : "white", backgroundColor : props.mode === "light" ? "white" : "#0b1d39"}}>
        <h2> Text Summary </h2>
        <p> {text.split(' ').filter((element) => {return element.length !== 0}).length} words and {text.length} characters </p>
        <p> {0.008 * text.split(' ').filter((element) => {return element.length !== 0}).length} minutes read </p>
      </div>
      <div className="container my-2" style={{color : props.mode === "light" ? "black" : "white", backgroundColor : props.mode === "light" ? "white" : "#0b1d39"}}>
        <h2> Text Preview </h2>
        <p> {text.length === 0 ? "Nothing to preview" : text} </p>
      </div>
    </>
    
  )
}

export default Textform
