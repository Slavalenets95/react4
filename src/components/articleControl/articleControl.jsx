import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { deleteArticle } from '../../services/blogService'
import classes from './articleControl.module.scss'


const ArticleControl = ({ token }) => {
    const history = useHistory()
    const { slug } = useParams()
    const [ confirmVisible, setConfirmVisible ] = useState(false)

    const editHandler = () => {
        history.push(`/article/${slug}/edit`)
    }

    const deleteHandler = async () => {
        deleteArticle(slug, token)
        history.push('/')
    }

    const confirm = <div className={classes.confirmWrapper}>
                        <p className={classes.confirmTxt}>Are you sure to delete this article?</p>
                        <button className={classes.confirmBtn} type='button' onClick={() => setConfirmVisible(!confirmVisible)}>No</button>
                        <button className={classes.confirmBtn} type='button' onClick={deleteHandler}>Yes</button>
                    </div>

    return (
        <div className={classes.wrapper}>
            <button className={classes.delete} type='button' onClick={() => setConfirmVisible(!confirmVisible)}>Delete</button>
            {confirmVisible ? confirm : null}
            <button className={classes.edit} type='button' onClick={editHandler}>Edit</button>
        </div>
    )
}

export default ArticleControl