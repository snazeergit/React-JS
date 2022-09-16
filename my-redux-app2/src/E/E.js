import React from "react";
import template from "./E.jsx";
import { connect } from 'react-redux'

class E extends React.Component {
  render() {
    return template.call(this);
  }
}
const mapStateToProps = (state) => {
  return {
    location: state.locationReducer.location
  }
}

E = connect(mapStateToProps)(E)

export default E;
