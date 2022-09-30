import React from 'react'
import './Select.css'

export const Select = (props) => {
    const { label, type, name, val, fnChange, errorMsg, isShowError, values, options } = props.data;



    return (
        <div className='row mb-3'>
            <div className='col-sm-5 text-end'>
                <b>{label}:</b>
            </div>
            <div className='col-sm-3 text-start'>
                <select name={name} onChange={fnChange} className='form-control'>
                    <option value=''>Please select</option>
                    {
                        options.map((opt, index) => {
                            return <option selected={val==values[index]} value={values[index]} key={index}>{opt}</option>
                        })
                    }
                </select>
            </div>
            <div className='col-sm-4 text-start'>
                {isShowError && <b className='text-danger'>{errorMsg}</b>}
            </div>
        </div>
    )
}
