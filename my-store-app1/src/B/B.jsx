import "./B.css";
import React from "react";

function template() {
  return (
    <div className="b">
      <h1>B</h1>
      Location: <input ref={this.locRef}/>
      <button onClick={this.fnClick}>submit</button>
    </div>
  );
};

export default template;
