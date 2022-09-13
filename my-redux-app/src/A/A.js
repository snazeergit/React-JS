import React from "react";
import template from "./A.jsx";
import store from '../store';

class A extends React.Component {
  constructor() {
    super()
    this.nameRef = React.createRef()
  }
  fnSubmit = () => {
    let name = this.nameRef.current.value
    store.dispatch({
      type: '',
      name
    })
  }
  render() {
    return template.call(this);
  }
}

export default A;
