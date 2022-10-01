import React, { createRef } from 'react'

export const StateMgmtAtComp1 = () => {

    //Not recommended as we need to take multiple state varible and update them mutliple times
    const [name, setName] = React.useState('Sachin')
    const [loc, setLoc] = React.useState('Mumbai')

    let nameRef = React.useRef()
    let locRef = React.useRef()

    const fnChName = () => {
        let name = nameRef.current.value
        setName(name)
    }

    const fnChLoc = () => {
        let loc = locRef.current.value
        setLoc(loc)
    }

    return (
        <div>
            <h1>State Management at Component Level</h1>
            <h3>
                Name : <input ref={nameRef} />
            </h3>
            <button onClick={fnChName}>ChaneName</button>
            <h3>
                Location : <input ref={locRef} />
            </h3>
            <button onClick={fnChLoc}>ChangeLocation</button>

            <h3> My name is <u>{name}</u> and I'm from <u>{loc}</u> .</h3>
        </div>
    )
}