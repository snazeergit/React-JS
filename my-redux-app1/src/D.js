import React from 'react'
import './D.css'
import {connect} from 'react-redux'
let D = (props) => {
  return (
    <div className='D'>
        <h1>D : {props.loc}</h1>
    </div>
  )
}

const mapStateToProps=(state)=>{
    return {
        loc: state.locReducer.loc
    }
}

//connect method to fetch the updated state changes from store
D=connect(mapStateToProps)(D)

export default D
