import React from 'react'
import { Link } from 'react-router-dom'
import HeaderUI from '../headerUI'
import classes from './header.module.scss'



const Header = () => {

    return (
        <header className={classes.header}>
            <Link className={[classes.logo]} to='/'>
                <h1>Realworld Blog</h1>
            </Link>
            <HeaderUI />
        </header>
    )

}

export default Header