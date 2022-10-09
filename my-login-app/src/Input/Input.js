import React from 'react'
import './Input.css'

export const Input = (props) => {
    const { label, name, value, type } = props.data
    const prepareInputControls = () => {
        switch (type) {
            case 'text':
            case 'password':
                return <input type={type} name={name} className='form-control' />
        }
    }
    return (

        <div className='row mb-3'>
            <div className='col-sm-5 text-end'>
                <b>{label} :</b>
            </div>
            <div className='col-sm-3 text-start'>
                {prepareInputControls()}
            </div>
            <div className='col-sm-4 text-start'>
                {/* Validation error logic */}
            </div>
        </div>

    )
}
