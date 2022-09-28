import "./A.css";
import React from "react";

function template() {
  return (
    <div className="a">
      <h1>A</h1>
      Name: <input ref={this.nameRef}/>
      <button onClick={this.fnClick}>submit</button>
    </div>
  );
};

export default template;
