import React from 'react'
import './Input.css'

export const Input = (props) => {
    const { label, name, value, type } = props.data
    const prepareInputControls = () => {
        switch (type) {
            case 'text':
            case 'password':
                return <input type={type} name={name} />
        }
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-sm-5'>
                    <b>{label} :</b>
                </div>
                <div className='col-sm-3'>
                    {prepareInputControls()}
                </div>
                <div className='col-sm-4'>
                    {/* Validation error logic */}
                </div>
            </div>
        </div>
    )
}
