import "./E.css";
import React from "react";

function template() {
  return (
    <div className="e">
      <h1>E</h1>
      <h3>Name : {this.state.data.nameReducer.name} </h3>
      <h3>Location : {this.state.data.locReducer.loc}</h3>
    </div>
  );
};

export default template;
