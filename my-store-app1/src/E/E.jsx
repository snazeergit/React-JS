import "./E.css";
import React from "react";

function template() {
  const {nameReducer, locReducer} = this.state.data
  return (
    <div className="e">
      <h1>E</h1>
      <h3>Name : {nameReducer.name} </h3>
      <h3>Location : {locReducer.loc}</h3>
    </div>
  );
};

export default template;
