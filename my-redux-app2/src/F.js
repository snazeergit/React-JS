import React from 'react'

import { connect } from 'react-redux'

let F = (props) => {
  return (
    <div>
      <h1>F :  {props.mobile}</h1>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    mobile: state.mobileReducer.mobile
  }
}

F = connect(mapStateToProps)(F)


export default F;
