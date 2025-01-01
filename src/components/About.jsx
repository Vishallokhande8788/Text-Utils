import React from "react";
import { useState } from "react";

export default function About(props) {

let myStyle={
color:props.mode==='dark'?'white':'black',
backgroundColor:props.mode==='dark'?'gray':'white',
}
 
  return (
    <div className="container  border rounded-5" style={myStyle}>
      <h1>About Us</h1>

      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <strong>1: About TextUtils</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Content : </strong> TextUtils is a versatile text
              manipulation tool designed to make your text editing tasks simple
              and efficient. Whether you're formatting text, analyzing its
              structure, or transforming it to fit your needs, TextUtils
              provides an easy-to-use interface with a range of powerful
              features. Our goal is to save your time and enhance productivity.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>2: Features</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Content : </strong>
              "TextUtils offers a range of features to streamline your text
              management: Convert to Uppercase/Lowercase: Instantly change the
              case of your text. Remove Extra Spaces: Clean up unnecessary
              spaces for a neat and professional look. copy Text: Quickly copy
              your formatted text to the clipboard. Dark Mode: Reduce eye strain
              and switch to a sleek dark theme. Real-Time Alerts: Get instant
              feedback with our alert system for all actions."
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              style={myStyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             <strong>3: Why Choose TextUtils?</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Content : </strong>
              "TextUtils stands out because of its simplicity and efficiency.
              It’s lightweight, fast, and packed with essential text utilities,
              all in one place. With the added convenience of React Router, you
              can easily navigate between features, and the responsive design
              ensures seamless usage on any device. Perfect for students,
              professionals, and anyone needing quick text manipulation tools."
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
