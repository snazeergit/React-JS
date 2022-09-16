import React from 'react'
import {connect} from 'react-redux'

let D = (props) => {
    return (
        <div>
            <h1>D : {props.name }</h1>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        name: state.nameReducer.name
       
    }
}
D = connect(mapStateToProps)(D)

export default D;