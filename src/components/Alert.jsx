import React from "react";

function Alert (props){
 const capitalize =(word)=>{
  const lower=word.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1);
 }
  return (
    <div style={{height:'40px'}}>

   { props.alert &&
      <div>
      <div
        className={ `alert alert-primary alert-dismissible fade show`}
        role="alert"
      
      > 
     <strong>{capitalize(props.alert.msg)}</strong>  {props.alert.type}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        >
        </button>
      </div>
    </div>
    }
    </div>
  );
}
export default Alert;