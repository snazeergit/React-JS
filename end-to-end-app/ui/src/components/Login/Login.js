import React, { useEffect, useState } from 'react'
import "./Login.css"
import { Input } from '../../common/Input/Input'
import { Link } from 'react-router-dom'
import { ServerCall } from '../../shared/ServerCall'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify'
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
    const dispatch = useDispatch()
    const [template, setTemplate] = useState('');

    useEffect(() => {
        fnPrepareTemplate()
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
        fnPrepareTemplate()
    }

    const fnPrepareTemplate = () => {
        let inputControlsArr = inputValues.map((obj,index) => {
            return <Input key={index} data={{ ...obj, fnChange }} />
        })
        setTemplate(inputControlsArr)
    }

    const fnLogin = async () => {
        let isFormValid = true;
        let dataObj = {}
        inputValues.forEach((obj) => {
            dataObj[obj.name] = obj.val
            if (!obj.val) {
                isFormValid = false;
                obj.isShowError = true;
            }
        })
        fnPrepareTemplate()
        if (!isFormValid) return;
        dispatch({
            type: "LOADER",
            payload: true
        })
        const res = await ServerCall.sendPost('dbops/auth', { payload: dataObj })
        dispatch({
            type: "LOADER",
            payload: false
        })
        const { status, data } = res
        if (status == 200) {
            if (data) {
                const { uid, token, _id } = data
                localStorage.token = token
                localStorage.setItem('uid', uid)
                localStorage.id = _id
                dispatch({
                    type: "AUTH",
                    payload: true
                })
            } else {
                toast.error("Incorrect credentials provided")
            }
        } else {
            toast.error("Something went wrong")
        }
    }

    return (
        <div className='container-fluid'>
            <h1 className="text-center mt-3 mb-5">Login</h1>
            {template}
            <div className='row'>
                <div className='offset-sm-5 col-sm-7 text-start'>
                    <button onClick={fnLogin} className='btn btn-primary me-3'>Login</button>
                    <Link to="/register">To Register</Link>
                </div>
            </div>
        </div>
    )
}