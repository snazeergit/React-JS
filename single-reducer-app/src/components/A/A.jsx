import "./A.css";
import React from "react";

function template() {
  return (
    <div className="a">
      <h1>A : </h1>
      <p> Name : <input ref={this.nameRef}/></p>
      <button onClick={this.fnSend}>send</button>
    </div>
  );
};

export default template;
