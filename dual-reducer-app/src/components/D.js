import React from 'react'
import {connect} from 'react-redux'

let D = (props) => {
    return (
        <div>
            <h1>D : {props.loc}</h1>

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loc: state.locReducer.loc
    }
}

D=connect(mapStateToProps)(D)

export default D