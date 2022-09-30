import './Register.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../../common/Input/Input'
import {Select} from '../../common/Select/Select'
import {TextArea} from '../../common/TextArea/TextArea'

const inputValues = [
  {
    label: 'Username',
    type: 'text',
    tag: "input",
    name: 'uid',
    val: 'u1',
    errorMsg: 'Please enter the Username',
    isShowError: false
  },
  {
    label: "Password",
    type: "password",
    tag: "input",
    name: "pwd",
    val: 'p1',
    errorMsg: 'Please enter the Password',
    isShowError: false
  },
  {
    label: "Phone",
    type: "number",
    tag: "input",
    name: "phone",
    val: '123',
    errorMsg: 'Please enter the Phone number',
    isShowError: false
  },
  {
    label: "Gender",
    type: "radio",
    tag: "input",
    name: "gender",
    val: 'F',
    values: ['M', 'F'],
    options: ['Male', 'Female'],
    errorMsg: 'Please select the gender',
    isShowError: false
  },
  {
    label: "Hobbies",
    type: "checkbox",
    tag: "input",
    name: "hobbies",
    val: 'CRIC,HOC',
    values: ['CRIC', 'FB','HOC'],
    options: ['Cricket', 'Football', 'Hockey'],
    errorMsg: 'Please select the hobbies',
    isShowError: false
  },
  {
    label: "Country",
    tag: "select",
    name: "country",
    val: 'Pak',
    values: ['Ind', 'Pak','Chi'],
    options: ['India', 'Pakistan', 'China'],
    errorMsg: 'Please select the country',
    isShowError: false
  },
  {
    label: "Address",
    tag: "textarea",
    name: "address",
    val: 'Hyderabad',
    errorMsg: 'Please enter the address',
    isShowError: false
  }
]

export const Register = () => {
  const [template, setTemplate] = useState('');

  useEffect(() => {
    fnPrepareTemplate()
  },[])

  const fnPrepareTemplate = () => {
    let inputControlsArr = inputValues.map((obj) => {
      switch (obj.tag) {
        case 'input':
          return <Input data={{ ...obj, fnChange }} />
        case 'select':
          return <Select data={{ ...obj, fnChange }} />
        case 'textarea':
          return <TextArea data={{ ...obj, fnChange }} />
      }
    })
    setTemplate(inputControlsArr)
  }

  const fnChange = () => {

  }

  const fnRegister = () => {

  }

  return (
    <div className='container-fluid'>
      <h1 className='text-center mt-3 mb-4'>Registration Page</h1>
      {template}
      <div className='row'>
        <div className='offset-sm-5 col-sm-7 text-start'>
          <button onClick={fnRegister} className='btn btn-primary me-3'>Register</button>
          <Link to="/login">To Login</Link>
        </div>
      </div>
    </div>
  )
}