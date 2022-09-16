import "./C.css";
import React from "react";

function template() {
  return (
    <div className="c">
      <h1>C : <input ref={this.mobileRef}/></h1>
      <button onClick={this.fnMobile}>Submit</button>
    </div>
  );
};

export default template;