import React from 'react'
import './TextArea.css'

export const TextArea = (props) => {
    const { label, type, name, val, fnChange, errorMsg, isShowError, values, options } = props.data;

    return (
        <div className='row mb-3'>
            <div className='col-sm-5 text-end'>
                <b>{label}:</b>
            </div>
            <div className='col-sm-3 text-start'>
                <textarea name={name} value={val} onChange={fnChange} className='form-control'></textarea>
            </div>
            <div className='col-sm-4 text-start'>
                {isShowError && <b className='text-danger'>{errorMsg}</b>}
            </div>
        </div>
    )
}
