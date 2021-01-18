import React from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import ReactMarkdown from 'react-markdown';
import UserAvatar from '../userAvatar'
import Like from '../like'
import ArticleControl from '../articleControl'
import classes from './article.module.scss'


const Article = ({ article, fullView, userName, token }) => {
    const { title, favoritesCount, description, author, createdAt, slug, body, tagList, favorited } = article
    const tagListItems = tagList.map((tag, index) => <li key={index} className={classes.tag}>{tag}</li>)
    
    return (
        <div className={fullView ? `${classes.article} ${classes.article_full}` : classes.article}>
            <header className={classes.header}>
                <Link to={`/articles/${slug}`} className={classes.title} >
                    {title}
                </Link>
                <Like favoritesCount={favoritesCount} token={token} slug={slug} favorited={favorited} />
                <UserAvatar {...author} createdAt={createdAt} image={author.image} />
                <ul className={classes.tagList}>
                    {tagListItems}
                </ul>
            </header>
            <div className={classes.article__content}>
                <p className={fullView ? classes.annotation_gray : classes.annotation}>{description}</p>
                {userName === author.username && fullView ? <ArticleControl token={token} /> : null}
            </div>
            {fullView ? <ReactMarkdown className={classes.body}>{body}</ReactMarkdown> : null}
        </div>
    )
}

const mapStateToProps = ({ user }) => {
    return {userName: user.username, token: user.token}
}

export default connect(mapStateToProps, null)(Article)