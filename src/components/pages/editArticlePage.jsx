import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import FormArea from '../formArea'
import Spinner from '../spinner'
import FormField from '../formField'
import FormTagList from '../formTagList'
import FormTextArea from '../formTextArea'
import { fetchArticle } from '../../actions/article'
import { editArticle } from '../../services/blogService'
import validateArticleSettings from '../../settings/validateArticleSettings'
import ErrorIndicator from '../errorIndicator'

const EditArticlePage = ( { token, article, fetchArticle, loading, error } ) => {
    const methods = useForm()
    const history = useHistory()
    const { slug } = useParams()
    useEffect(() => {
        fetchArticle(slug)
    }, [fetchArticle, slug])
    
    const onSubmit = async (data) => {
        const responce = await editArticle({article: data}, slug, token)
        if(responce.errors) {
            const {errors : apiErrors} = responce
            Object.keys(apiErrors).forEach(item => apiErrors[item].forEach(errMessage => methods.setError(item, { type: 'manual', message: `Email or password ${errMessage}`})))
        }

        if(responce.article) {
            history.push(`/articles/${slug}`)
        }
    }

    if(loading) return <Spinner />
    if(error) return <ErrorIndicator />

    const { title, description, body, tagList } = article.article
    return (
        <FormArea methods={methods} onSubmit={onSubmit} title='Edit article' btnTxt='Send' theme='article' >
            <FormField label='Title' type='text' placeholder='Title' name='title' validateObj={validateArticleSettings.title} value={title} />
            <FormField label='Short description' type='text' placeholder='Description' name='description' validateObj={validateArticleSettings.description} value={description} />
            <FormTextArea label='text' placeholder='text' name='body' validateObj={validateArticleSettings.body} value={body} />   
            <FormTagList tagList={tagList} />   
        </FormArea>
    )


}

const mapStateToProps = ({ user, article }) => {
    return { token: user.token, article: article.article, loading: article.loading, error: article.error }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchArticle
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditArticlePage)