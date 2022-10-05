import React from 'react'
import './Input.css'

export const Input = (props) => {
    const { label, type, name, val, fnChange, errorMsg, isShowError, values, options } = props.data;

    const fnPrepareInputControls = () => {
        switch (type) {
            case 'text':
            case 'password':
            case 'number':
                return <input onChange={fnChange} className='form-control' type={type} name={name} value={val} />
            case 'radio':
                return options.map((opt, index) => {
                    return <React.Fragment><input key={index} checked={values[index]==val} onChange={fnChange} type={type} name={name} value={values[index]} /><b className='me-3'>{opt}</b></React.Fragment>
                })
                case 'checkbox':
                return options.map((opt, index) => {
                    return <React.Fragment><input key={index} checked={val.includes(values[index])} onChange={fnChange} type={type} name={name} id={values[index]} value={val} /><b className='me-3'>{opt}</b></React.Fragment>
                })
        }
    }

    return (
        <div className='row mb-3'>
            <div className='col-sm-5 text-end'>
                <b>{label}:</b>
            </div>
            <div className='col-sm-3 text-start'>
                {fnPrepareInputControls()}
            </div>
            <div className='col-sm-4 text-start'>
                {isShowError && <b className='text-danger'>{errorMsg}</b>}
            </div>
        </div>
    )
}
