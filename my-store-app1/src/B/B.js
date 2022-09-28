import React    from "react";
import { appStore } from "../store/appStore.js";
import template from "./B.jsx";

class B extends React.Component {
  constructor(){
    super()
    this.locRef=React.createRef()
  }
  fnClick=()=>{
    var loc=this.locRef.current.value
    appStore.dispatch({
      type:'LOC_REDUCER',
      payload:loc
    })
  }
  render() {
    return template.call(this);
  }
}

export default B;
