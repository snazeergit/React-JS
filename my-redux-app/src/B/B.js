import React    from "react";
import template from "./B.jsx";

class B extends React.Component {
  render() {
    return template.call(this);
  }
}

export default B;
