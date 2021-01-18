import React from 'react'
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message';
import classes from './formTextArea.module.scss'

const FormTextArea = ({ label, placeholder, name, validateObj, value }) => {
    const { register, errors } = useFormContext()
    const textAreaClasses = errors[name] ? `${classes.textarea} ${classes.textarea_error}` : `${classes.textarea}`
    return (
        <>
        <label className={classes.label}>
            {label}
            <textarea className={textAreaClasses}
                defaultValue={value}
                placeholder={placeholder}
                name={name}
                ref={register(validateObj)}
            />
            <span className={classes.errors}><ErrorMessage errors={errors} name={name} /></span>
        </label>
        </>
    )
}


export default FormTextArea