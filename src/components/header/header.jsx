import React from 'react'
import classes from './header.module.scss'



const Header = () => {

    return (
        <header className={classes.header}>
            <h1 className={[classes.logo, classes.header__logo]}>Realworld Blog</h1>
            <ul className={classes.header__list}>
                <li className={classes['header__list-item']}>
                    <button className={[classes.header__btn]} 
                            type='button'
                    >
                    Sign In
                    </button>
                </li>
                <li className={classes['header__list-item']}>
                    <button className={[classes.header__btn]} 
                            type='button'
                    >
                    Sign Up
                    </button>
                </li>
            </ul>
        </header>
    )

}

export default Header