import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Spinner from '../spinner'
import ErrorIndicator from '../errorIndicator'
import { fetchArticle } from '../../actions/article'
import Article from '../article'

const ArticlePage = ({article, loading, err, fetchArticle}) => {
    const { slug } = useParams()
    
    useEffect(() => {
        fetchArticle(slug)
    }, [fetchArticle, slug])

    if(loading) return <Spinner />
    if(err) return <ErrorIndicator />

    return (
        <Article fullView {...article} />
    )
}


const mapStateToProps = ({ article: {article, loading, err}}) => {
    return {
        article,
        loading,
        err
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchArticle
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(ArticlePage)