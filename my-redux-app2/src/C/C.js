import React from "react";
import template from "./C.jsx";
import { myStore } from '../store'

class C extends React.Component {
  constructor() {
    super()
    this.mobileRef = React.createRef()
  }

  fnMobile = () => {
    const mobile = this.mobileRef.current.value
    myStore.dispatch({
      type: 'MOBILE_REDUCER',
      payload: mobile
    })
  }
  
  render() {
    return template.call(this);
  }
}

export default C;