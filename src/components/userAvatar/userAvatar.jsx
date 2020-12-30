import React from 'react'
import PropTypes from 'prop-types'; 
import { format } from 'date-fns'
import { timeZone } from './helper'
import classes from './userAvatar.module.scss'

const UserAvatar = ({ image, username, createdAt }) => {

    return (
        <div className={classes.wrapper}>
            <div className={classes.info}>
                <p className={classes.login}>{username}</p>
                {createdAt ? <p className={classes.date}>{format(new Date(createdAt) - timeZone, 'MMMM d, y')}</p> : null } 
            </div>
            <img className={classes.img} src={image} alt="" />
        </div>
    )
}

UserAvatar.propTypes = {
    image: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    createdAt: PropTypes.string,
}

UserAvatar.defaultProps = {
    createdAt: false,
}


export default UserAvatar