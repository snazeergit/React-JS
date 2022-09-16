import React from "react";
import template from "./A.jsx";
import { myStore } from '../store'

class A extends React.Component {
  constructor() {
    super()
    this.nameRef = React.createRef()
  }
  fnName = () => {
    let name = this.nameRef.current.value
    myStore.dispatch({
      type: 'NAME_REDUCER',
      payload: name
    })
  }
  render() {
    return template.call(this);
  }
}

export default A;
