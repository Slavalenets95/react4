import React, { useState } from 'react'
import { likeArticle, unlikeArticle } from '../../services/blogService'
import classes from './like.module.scss'

const Like = ({ favoritesCount, token, slug }) => {
    const [ likeCount, setLikeCount ] = useState(favoritesCount)

    const checkHandler = (event) => {
        if(!event.target.checked) {
            unlikeArticle(slug, token)
            setLikeCount(likeCount - 1)
        } else {
            likeArticle(slug, token)
            setLikeCount(likeCount + 1)
        }
    }
    return (
        <div className={classes.like_wrapper}>
            <input
                disabled={!token}
                onChange={checkHandler}
                type="checkbox"
                id={slug}
                className={classes.like_check}
            />
            <label
                htmlFor={slug}
                className={classes.like_label}
            >
                {likeCount}
            </label>
        </div>
    )
}


export default Like