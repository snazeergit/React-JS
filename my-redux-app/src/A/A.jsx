import "./A.css";
import React from "react";
import B from '../B/index'

function template() {
  return (
    <div className="a">
      <h1>A</h1>
      <p>
        Name: <input ref={this.nameRef}/>
      </p>
      <button onClick={this.fnSubmit}>Submit</button>
      <B />
    </div>
  );
};

export default template;
