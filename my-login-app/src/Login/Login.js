import React from 'react'
import './Login.css'
import { Input } from '../Input/Input'

const inputValues = [
    {
        label: 'Username',
        name: "uid",
        type: "text",
        value: ''
    },
    {
        label: 'Password',
        name: "pwd",
        type: "password",
        value: ''
    }
]

export const Login = () => {
    //To make the login template load during Login comp loading phase
    React.useEffect(() => {
        prepareTemplate()
    }, [])

    const prepareTemplate = () => {
        let inputControlsArr = inputValues.map((obj, index) => {
            return <Input key={index} data={obj} />
        })
    }
    return (
        <div className='container-fluid'>
            <p>Login</p>
            <div className='row'>
                <div className='col-sm-5'>
                    <button>Login</button>
                </div>
            </div>
        </div>
    )
}
