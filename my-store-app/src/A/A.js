import React    from "react";
import { appStore } from "../store/appStore.js";
import template from "./A.jsx";

class A extends React.Component {
  constructor(){
    super()
    this.nameRef=React.createRef()
  }

  fnClick=()=>{
    var name=this.nameRef.current.value
    
    appStore.dispatch({
      type:'',
      payload:name
    })

  }
  render() {
    return template.call(this);
  }
}

export default A;
