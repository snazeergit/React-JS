import React from "react";
import template from "./E.jsx";
import { appStore } from '../store/appStore'

class E extends React.Component {
  state = {
    //initial store data
    data: appStore.getState()
  }

  //invoked during mounting phase of React Life-cycle after comp is rendered
  componentDidMount() {
    //invoked when store changes found
    appStore.subscribe(() => {
      //updating state variable with the latest data from store
      this.setState({ data: appStore.getState() })
    })
  }

  render() {
    return template.call(this);
  }
}

export default E;
