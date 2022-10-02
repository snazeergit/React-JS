import React from "react";
import template from "./A.jsx";
import { appStore } from '../../store/appStore'

class A extends React.Component {
  constructor() {
    super()
    this.nameRef = React.createRef()
  }
  fnSend = () => {
    const name = this.nameRef.current.value
    appStore.dispatch({
      type: 'NAME',
      payload: name
    })
  }
  render() {
    return template.call(this);
  }
}

export default A;
