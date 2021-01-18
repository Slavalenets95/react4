import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message';
import classes from './formField.module.scss'

const FormField = ({ label, type, placeholder, name, validateObj, value }) => {
    const { register, errors } = useFormContext()
    const inputClasses = errors[name] ? `${classes.input} ${classes.input_error}` : `${classes.input}`
    return (
        <>
            <label className={classes.label}>
                {label}
                <input className={inputClasses}
                    defaultValue={value}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    ref={register(validateObj)}
                />
                <span className={classes.errors}><ErrorMessage errors={errors} name={name} /></span>
            </label>
        </>
    )
}


export default FormField