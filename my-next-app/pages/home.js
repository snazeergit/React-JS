import React from 'react'
import styles from '../styles/Home.module.css'

const Home = () => {
    const [count, setCount] = React.useState(0)
    //to increase count value
    const fnCountInc = () => {
        setCount(count + 1)
    }

    //to decrease count value
    const fnCountDec = () => {
        setCount(count - 1)
    }
    //to reset the count value
    const fnCountRes = () => {
        setCount(0)
    }
    return (
        <div className={styles.home}>
            <div>The React Framework for Production</div>
            <h5>Count :{count}</h5>
            <div className={styles.button}>
                <button onClick={fnCountInc}><b>Increment</b></button>
                <button onClick={fnCountDec}><b>Decrement</b></button>
                <button onClick={fnCountRes}><b>Reset</b></button>
            </div>
        </div>
    )
}
export default Home