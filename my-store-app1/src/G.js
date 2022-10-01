import React from 'react'
import { useSelector } from 'react-redux'

//Retreiving data from store using 3nd approach: useSelector()
export const G = () => {
    //It retuns the latest store data
    const data = useSelector((state) => {
        return state;
    })
    return (
        <div>
            <h1>G</h1>
            <h3>Name : {data.nameReducer.name} </h3>
            <h3>Location : {data.locReducer.loc}</h3>
        </div>
    )
}
