import React    from "react";
import template from "./C.jsx";

class C extends React.Component {
  render() {
    return template.call(this);
  }
}

export default C;
