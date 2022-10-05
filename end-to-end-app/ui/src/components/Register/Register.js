import './Register.css'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Input } from '../../common/Input/Input'
import { Select } from '../../common/Select/Select'
import { TextArea } from '../../common/TextArea/TextArea'
import { regFormValidations } from '../../validations/regFormValidations'
import { ServerCall } from '../../shared/ServerCall'
import { toast } from 'react-toastify'
import { appStore } from '../../store/appStore'

const inputValues = [
  {
    label: 'Username',
    type: 'text',
    tag: "input",
    name: 'uid',
    val: '',
    errorMsg: '',
    isShowError: false
  },
  {
    label: "Password",
    type: "password",
    tag: "input",
    name: "pwd",
    val: '',
    errorMsg: '',
    isShowError: false
  },
  {
    label: "Phone",
    type: "number",
    tag: "input",
    name: "phone",
    val: '',
    errorMsg: '',
    isShowError: false
  },
  {
    label: "Gender",
    type: "radio",
    tag: "input",
    name: "gender",
    val: '',
    values: ['M', 'F'],
    options: ['Male', 'Female'],
    errorMsg: '',
    isShowError: false
  },
  {
    label: "Hobbies",
    type: "checkbox",
    tag: "input",
    name: "hobbies",
    val: '',
    values: ['CRIC', 'FB', 'HOC'],
    options: ['Cricket', 'Football', 'Hockey'],
    errorMsg: '',
    isShowError: false
  },
  {
    label: "Country",
    tag: "select",
    name: "country",
    val: '',
    values: ['Ind', 'Pak', 'Chi'],
    options: ['India', 'Pakistan', 'China'],
    errorMsg: '',
    isShowError: false
  },
  {
    label: "Address",
    tag: "textarea",
    name: "address",
    val: '',
    errorMsg: '',
    isShowError: false
  }
]

export const Register = () => {
  const [template, setTemplate] = useState('');

  useEffect(() => {
    fnPrepareTemplate()
  }, [])

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

  const fnChange = (eve) => {
    const { name, value, type, checked, id } = eve.target
    let inputObj = inputValues.find((obj) => {
      return obj.name == name
    })
    if (type == 'checkbox') {

      let selHobbies = []
      if (inputObj.val) {
        selHobbies = inputObj.val.split(',')
      }
      if (checked) {
        selHobbies.push(id)

      } else {
        selHobbies.splice(selHobbies.indexOf(id), 1)
      }
      inputObj.val = selHobbies.join()
    } else {
      inputObj.val = value
    }
    inputObj.errorMsg = ''
    regFormValidations(inputObj)
    fnPrepareTemplate()
  }

  const fnRegister = () => {
    let isFormValid = true
    let dataObj = {}
    inputValues.forEach((inputObj) => {
      const { name, val } = inputObj
      dataObj[name] = val
      regFormValidations(inputObj)
      if (inputObj.errorMsg) {
        isFormValid = false
      }
    })
    fnPrepareTemplate()
    if (!isFormValid) return
    appStore.dispatch({
      type: 'LOADER',
      payload: true
    })
    ServerCall.sendPost("dbops/insert-std", { payload: dataObj })
      .then((res) => {
        appStore.dispatch({
          type: 'LOADER',
          payload: false
        })
        const { acknowledged, insertedId } = res.data
        if (acknowledged && insertedId) {
          toast.success('Document successfully inserted')
          inputValues.forEach((obj) => {
            obj.val = ''
            obj.errorMsg = ''
            obj.isShowError = false
          })
          fnPrepareTemplate()
        } else {
          toast.info('Document not inserted, try again')
        }
      })
      .catch((error) => {
        appStore.dispatch({
          type: 'LOADER',
          payload: false
        })
        toast.error('Unable to establish connection with Server')
        console.log(error)
      })
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