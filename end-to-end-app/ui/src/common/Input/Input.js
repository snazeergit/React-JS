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
        //bootstrap every row contains 12 coloums and we specified margin bottom 3 for every row
        <div className='row mb-3'>
        {/* for label we assigned 5 columns */}
            <div className='col-lg-5 text-end'>
                <b>{label}:</b>
            </div>
            {/* for input controle like textbox we assigned 3 columns */}
            <div className='col-lg-3 text-start'>
                {fnPrepareInputControls()}
            </div>
            {/* for error messages we assigned 4 columns */}
            <div className='col-lg-4 text-start'>
                {isShowError && <b className='text-danger'>{errorMsg}</b>}
            </div>
        </div>
    )
}
