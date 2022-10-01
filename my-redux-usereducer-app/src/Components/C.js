import React from 'react'
import { ctx } from '../context'

export const C = () => {
    const ctxData = React.useContext(ctx)
    const { name, loc } = ctxData.state
    return (
        <div>
            <h1>C : </h1>
            <h3> My name is <u>{name}</u> and I'm from <u>{loc}</u> .</h3>
        </div>
    )
}
