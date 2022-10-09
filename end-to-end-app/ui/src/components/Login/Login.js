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
    //To make the login template load during Login comp loading phase
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

        /* if (!value) {
             inputObj.isShowError = true
         }
         */
        fnPrepareTemplate()
    }

    const fnPrepareTemplate = () => {
        let inputControlsArr = inputValues.map((obj, index) => {
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
        /* container-fluid is to remove the horizontal scroll i.e changing fixed width to full width*/
        <div className='container-fluid'>
            {/* margin top 3 margin bottom 5 */}
            <h1 className="text-center mt-3 mb-5">Login</h1>
            {template}
            {/*row class is having -15 margin right and left so we get horizantal scroling to avoid use container-fluid in place container */}
            <div className='row'>
                {/*out of 12 columns leave 5 columns empty and take 7 columns for login button 
                and btn should display at the start of the 7 column group i.e in the start of the 6th column */}
                <div className='offset-sm-5 col-sm-7 text-start'>
                    <button onClick={fnLogin} className='btn btn-primary me-3'>Login</button>
                    <Link to="/register">To Register</Link>
                </div>
            </div>
        </div>
    )
}