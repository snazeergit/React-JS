import React    from "react";
import template from "./C.jsx";
import { connect } from 'react-redux'

class C extends React.Component {
  render() {
    return template.call(this);
  }
}

const mapStateToProps=(state)=>{
  return {
    n:state.myReducer.name
  }
}
C=connect(mapStateToProps)(C)

export default C;