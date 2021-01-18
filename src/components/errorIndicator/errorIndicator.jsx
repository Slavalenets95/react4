import React from 'react'
import errorImg from '../../image/error.jpg'
import classes from './errorIndicator.module.scss'

const ErrorIndicator = () => {

    return (
        <div><img src={errorImg} alt="Error"/></div>
    )
}

export default ErrorIndicator