import React, { useEffect, useState } from 'react'
import "./Login.css"
import { Input } from '../../common/Input/Input'
import { Link } from 'react-router-dom'

const inputValues = [
    {
        label: 'Username',
        type: 'text',
        name: 'uid',
        val: '',
        errorMsg: 'Please enter the Username',
        isShowError: false
    },
    {
        label: "Password",
        type: "password",
        name: "pwd",
        val: '',
        errorMsg: 'Please enter the Password',
        isShowError: false
    }
]

export const Login = () => {

    const [template, setTemplate] = useState('');

    useEffect(() => {
        prepareTemplate()
    }, [])

    const fnChange = (eve) => {
        const { name, value } = eve.target
        let inputObj = inputValues.find((obj) => {
            return obj.name == name
        })
        inputObj.val = value
        inputObj.isShowError = value ? false : true
        if (!value) {
            inputObj.isShowError = true
        }
        prepareTemplate()
    }

    const prepareTemplate = () => {
        let inputControlsArr = inputValues.map((obj) => {
            return <Input data={{ ...obj, fnChange }} />
        })
        setTemplate(inputControlsArr)
    }

    const fnLogin = () => {
        let isFormValid = true;
        inputValues.forEach((obj) => {
            if (!obj.val) {
                isFormValid = false;
                obj.isShowError = true;
            }
        })

        if (!isFormValid) {
            prepareTemplate()
        } else {
            alert('send request to the server')
        }
    }

    return (
        <div className='container-fluid'>
            <h1 className="text-center mt-3 mb-5">Login</h1>
            {template}
            <div className='row'>
                <div className='offset-sm-5 col-sm-7 text-start'>
                    <button onClick={fnLogin} className='btn btn-primary'>Login</button>
                    <Link to="/register">To Register</Link>
                </div>
            </div>
        </div>
    )
}