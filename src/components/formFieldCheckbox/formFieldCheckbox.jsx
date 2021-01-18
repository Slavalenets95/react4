import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message';
import classes from './formFieldCheckbox.module.scss'

const FormFieldCheckbox = ({ label, type, name, id, validateObj}) => {
    const { register, errors } = useFormContext()
    const checkboxClasses = errors[name] ? `${classes.checkbox} ${classes.checkbox_error}` : `${classes.checkbox}`
    return (
        <div className={classes.wrapper}>
            <input className={checkboxClasses}
                type={type}
                name={name}
                id={id}
                ref={register(validateObj)}
            />
            <label className={classes.label} htmlFor={id}>{label}</label>
            <p className={classes.errors}><ErrorMessage classname={classes.errors} errors={errors} name={name} /></p>
        </div>
    )
}

export default FormFieldCheckbox