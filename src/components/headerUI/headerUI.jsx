import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { clearUser } from '../../actions/user'
import AuthContext from '../authContext/authContext'
import noAvatarImg from '../../image/noUserAvatar.svg'
import classes from './headerUI.module.scss'


const HeaderUI = ({ clearUser }) => {
    const auth = useContext(AuthContext)
    
   
    if (auth) {
        const { username, image: avatarImg } = auth
        return (
            <>
                <Link className={classes.ui__link} to='/new-article'>
                    <button className={`${classes.ui__btn_sm} ${classes.ui__btn_green}`}
                        type='button'
                    >
                        Create article
               </button>
                </Link>
                <Link className={classes.ui__link} to='/profile'>
                    <div className={classes.avatar_wrapper}>
                        <span className={classes.user_name}>{username}</span>
                        <img src={avatarImg || noAvatarImg} onError={(e) => e.target.src = noAvatarImg} alt="Avatar" />
                    </div>
                </Link>
                <Link className={classes.ui__link} to='/'>
                    <button className={`${classes.ui__btn} ${classes.ui__btn_black}`}
                        type='button'
                        onClick={clearUser}
                    >
                        Log Out
               </button>
                </Link>
            </>

        )
    }
    
    return (
        <ul className={classes.ui__list}>
            <li className={classes['ui__list-item']}>
                <Link to='/sign-in'>
                    <button className={[classes.ui__btn]}
                        type='button'
                    >
                        Sign In
                    </button>
                </Link>
            </li>
            <li className={classes['ui__list-item']}>
                <Link to='/sign-up'>
                    <button className={`${classes.ui__btn} ${classes.ui__btn_green}`}
                        type='button'
                    >
                        Sign Up
                    </button>
                </Link>
            </li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ clearUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(HeaderUI)