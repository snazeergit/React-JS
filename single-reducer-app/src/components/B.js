import React from 'react'
import { connect } from 'react-redux'
let B = (props) => {
    return (
        <div>
            <h1>B : {props.name}</h1>
        </div>
    )
}
const mapStateToProps = (state)=>{
    return{
        name:state.myReducer.name
    }
}
    

B = connect(mapStateToProps)(B)
export default B