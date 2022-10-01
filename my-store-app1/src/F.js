import React, { useEffect, useState } from 'react'
import { appStore } from './store/appStore'

//Retreiving data from store using 2nd approach: subscribe() + getState()
export const F = () => {
    //storing initial store data into state variable
    const [store, setStore] = useState(appStore.getState());

    //invoked during mounting phase of React Life-cycle after comp is rendered
    useEffect(() => {
        //invoked when store changes found
        appStore.subscribe(() => {
            //updating state variable with the latest data from store
            setStore(appStore.getState())
        })
    }, [])

    return (
        <div>
            <h1>F</h1>
            <h3>Name : {store.nameReducer.name}</h3>
            <h3>Location : {store.locReducer.loc}</h3>
        </div>
    )
}
