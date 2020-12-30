import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import withBlogService from '../hoc/withBlogService' 
import { fetchArticle } from '../../actions/article'

const ArticlePage = ({article, slug, blogService, fetchArticle}) => {
    useEffect(() => {
        fetchArticle(blogService, slug)
    }, [blogService, fetchArticle, slug])
    console.log(article)
    return (
        <h1>123</h1>
    )
}


const mapStateToProps = ({article}) => {
    return {
        article
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchArticle
    }, dispatch)
}


export default withBlogService(connect(mapStateToProps, mapDispatchToProps)(ArticlePage))