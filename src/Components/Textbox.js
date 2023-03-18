import React, { useState } from "react";
export default function Textbox(props) {
  const handleUpclick = () => {
    
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handlelowclick = (event) => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const Titlecase = () => {
    let lowercase = text.toLowerCase();
    let words = lowercase.split(" ");
    let newWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    let newText = newWords.join(" ");
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const ReplaceString = () => {
    let repval = prompt("Enter the word to be replaced:");
    let tobereplaced = new RegExp(repval, "g");

    let toreplace = prompt("Enter the text that you want to replace with:");

    let newText = text.replace(tobereplaced, toreplace);
    setText(newText);
  };
  const Clearall = () => {
    let newText = "";
    setText(newText);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div>
        <h1>{props.heading}</h1>
      </div>
      <div className="form-group">
        <textarea className="form-control my-2" value={text} onChange={handleOnChange} id="textarea" style= {{backgroundcolor:props.mode==='light'?'white':'grey'}} rows="8">
        </textarea>
      </div>
      <div className="container">
        <h1>Your text summary </h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
      </div>
      <button
        type="uppercase"
        className="btn btn-primary mx-2"
        onClick={handleUpclick}
      >
        Convert to uppercase
      </button>
      <button
        type="Lowercase"
        className="btn btn-primary mx-2"
        onClick={handlelowclick}
      >
        Convert to lowercase
      </button>
      <button
        type="Titlecase"
        className="btn btn-primary mx-2"
        onClick={Titlecase}
      >
        Capitalize each word
      </button>
      <button
        type="Replace"
        className="btn btn-primary mx-2"
        onClick={ReplaceString}
      >
        Find and Replace
      </button>
      <button type="Clear" className="btn btn-primary mx-2" onClick={Clearall}>
        Clear
      </button>
    </>
  );
}
