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
    const [template, setTemplate] = React.useState('');

    //To make the login template load during Login comp loading phase
    React.useEffect(() => {
        fnPrepareTemplate()
    }, [])

    const fnPrepareTemplate = () => {
        let inputControlsArr = inputValues.map((obj, index) => {
            return <Input key={index} data={obj} />
        })
        setTemplate(inputControlsArr)
    }
    return (
        <div className='container-fluid'>
            <h1 className='text-center mt-3 mb-5'>Login</h1>
            {template}
            <div className='row'>
                <div className='iffset-sm-5 col-sm-7 text-start'>
                    <button>Login</button>
                </div>
            </div>
        </div>
    )
}
