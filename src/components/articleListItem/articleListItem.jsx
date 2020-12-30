import React from 'react'
import UserAvatar from '../userAvatar'
import classes from './articleListItem.module.scss'


const ArticleListItem = ({ title, favoritesCount, description, author, createdAt }) => {

    return (
        <li className={classes.article}>
            <header className={classes.article__header}>
                <h2 className={classes.article__title}>{title}</h2>
                <div className={classes.like_wrapper}>
                    <input
                        type="checkbox"
                        id="likeID"
                        className={classes.like_check}
                    />
                    <label
                        htmlFor="likeID"
                        className={classes.like_label}
                    >
                        {favoritesCount}
                    </label>
                </div>
                <UserAvatar {...author} createdAt={createdAt} />
            </header>
            <div className={classes.article__content}>
                <ul className={classes.tag_list}>
                    <li className={classes.tag_list__item}>Tag 1</li>
                </ul>
                <p className={classes.article__annotation}>{description}</p>
            </div>
        </li>
    )
}


export default ArticleListItem