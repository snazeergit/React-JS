import React    from "react";
import template from "./D.jsx";
import {connect} from "react-redux"

class D extends React.Component {
  render() {
    return template.call(this);
  }
}
const f=(state)=>{
  return {
    l:state.locReducer.loc
  }
}
D=connect(f)(D)
export default D;
