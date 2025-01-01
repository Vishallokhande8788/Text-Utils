import React, { useState } from "react";

export default function TextForm(props) {
  const [Text, setText] = useState("");

  const handelUpClick = () => {
    let newText = Text.toUpperCase();
    setText(newText);
    props.showAlert("success", "Text Converted To Uppercase");
  };

  const handelLoClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showAlert("success", "Text Converted To Lowercase");
  };

  const handelClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("success", "Text Cleared");
  };

  const handelOnChange = (event) => {
    setText(event.target.value);
  };
  const handelCopy = () => {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("success", "Text Copied to Clipboard !");
  };
  const handelExtraSpaces = () => {
    let newText = Text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("success", "Remove Extra Spaces");

  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control container  border rounded-5 "
            value={Text}
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handelOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>

        <button disabled={Text.length===0} className="btn btn-warning me-2 my-2" onClick={handelUpClick}>
          Convert To Uppercase
        </button>
        <button disabled={Text.length===0} className="btn btn-warning mx-2 my-2" onClick={handelLoClick}>
          {" "}
          Convert To Lowercase{" "}
        </button>
        <button disabled={Text.length===0} className="btn btn-warning mx-2 my-2" onClick={handelExtraSpaces}>
          Remove extra space
        </button>
        <button disabled={Text.length===0} className=" btn btn-warning mx-2 my-2" onClick={handelClearClick}>
          {" "}
          Clear Text
        </button>
        <button disabled={Text.length===0} className="btn btn-warning mx-2 my-2" onClick={handelCopy}>
          Copy Text
        </button>
      </div>

      <div
        className="cotainer my-3"
        style={{ color: props.mode === "light" ? "white" : "black" }}
      >
        <h2>Your Text Summary </h2>
        <p>
          {Text.split(" ").filter((element)=>{return element.length !==0}).length} Words , {Text.length} Characters
        </p>
        <p>{0.008 * Text.split(" ").filter((element)=>{return element.length !==0}).length}</p>
        <h2>Preview</h2>
        <p>
          {Text.length > 0
            ? Text
            : "Nothing to preview"}
        </p>
      </div>
    </>
  );
}
