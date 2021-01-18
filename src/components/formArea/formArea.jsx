import React from 'react'
import { FormProvider } from 'react-hook-form'
import { Link } from 'react-router-dom'
import classes from './formArea.module.scss'


const FormArea = ({ methods, title, footerTxt, footerLink, footerLinkTo, children, btnTxt, onSubmit, theme }) => {
    const style = theme === 'article' ? `${classes.form} ${classes.article_form}` : `${classes.form}`
    return (
        <FormProvider {...methods}>
            <form className={style} onSubmit={methods.handleSubmit(onSubmit)}>
                <h2 className={classes.title}>{title}</h2>
                {children}
                <button className={classes.button} type='submit'>{btnTxt}</button>
                <div className={classes.footer}>
                    <span className={classes.footer_txt}>{footerTxt}</span>
                    <Link to={footerLinkTo} >{footerLink}</Link>
                </div>
            </form>
        </FormProvider>
    )
}

export default FormArea