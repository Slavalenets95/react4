import React from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import FormArea from '../formArea'
import FormField from '../formField'
import FormTagList from '../formTagList'
import FormTextArea from '../formTextArea'
import { createArticle } from '../../services/blogService'
import validateArticleSettings from '../../settings/validateArticleSettings'

const CreateArticlePage = ( { token } ) => {
    const methods = useForm()
    const history = useHistory()
    const onSubmit = async (data) => {
        const responce = await createArticle({article: data}, token)
        if(responce.errors) {
            const {errors : apiErrors} = responce
            Object.keys(apiErrors).forEach(item => apiErrors[item].forEach(errMessage => methods.setError(item, { type: 'manual', message: `Email or password ${errMessage}`})))
        }
        if(responce.article) {
            const { slug } = responce.article
            history.push(`/articles/${slug}`)
        }
    }

    return (
        <FormArea methods={methods} onSubmit={onSubmit} title='Create article' btnTxt='Send' theme='article' >
            <FormField label='Title' type='text' placeholder='Title' name='title' validateObj={validateArticleSettings.title} />
            <FormField label='Short description' type='text' placeholder='Description' name='description' validateObj={validateArticleSettings.description} />
            <FormTextArea label='text' placeholder='text' name='body' validateObj={validateArticleSettings.body} />   
            <FormTagList />   
        </FormArea>
    )


}

const mapStateToProps = ({ user }) => {
    return { token: user.token }
}

export default connect(mapStateToProps,null)(CreateArticlePage)