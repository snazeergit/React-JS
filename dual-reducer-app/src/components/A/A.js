import React from "react";
import { appStore } from "../../store/appStore.js";
import template from "./A.jsx";

class A extends React.Component {
  constructor() {
    super()
    this.nameRef = React.createRef()
  }
  fnName = () => {
    const name = this.nameRef.current.value
    appStore.dispatch({
      type: "NAME",
      payload: name
    })
  }
  render() {
    return template.call(this);
  }
}

export default A;
