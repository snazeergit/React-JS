import React from "react";
import template from "./A.jsx";
import {dispatch} from '@reduxjs/toolkit'
import {appStore} from '../store/appStore'

class A extends React.Component {
  constructor() {
    super()
    this.nameRef = React.createRef()
  }
  fnClick = () => {
    var name = this.nameRef.current.value
    appStore.dispatch({
      type: 'NAME_REDUCER',
      payload: name
    })
  }
  render() {
    return template.call(this);
  }
}

export default A;
