import React from "react";
import { connect } from "react-redux";
import template from "./C.jsx";

class C extends React.Component {
  render() {
    return template.call(this);
  }
}
const mapStateToProps = (state) => {
  return {
    name:state.nameReducer.name
  }
}
C = connect(mapStateToProps)(C)
export default C;
