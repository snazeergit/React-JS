import "./A.css";
import React from "react";
import B from '../B/index'

function template() {
  return (
    <div className="a">
      <h1>A</h1>
      Name: <input ref={this.nameRef}/>
      <button onClick={this.fnClick}>submit</button>
      <B/>
    </div>
  );
};

export default template;
