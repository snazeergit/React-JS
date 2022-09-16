import "./A.css";
import React from "react";

function template() {
  return (
    <div className="a">
      <h1>A : <input ref={this.nameRef}/></h1>
      <button onClick={this.fnName}>Submit</button>
    </div>
  );
};

export default template;
