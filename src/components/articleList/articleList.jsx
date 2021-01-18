import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import { Pagination } from 'antd'
import { useHistory, useParams } from 'react-router-dom'
import Spinner from '../spinner'
import ErrorIndicator from '../errorIndicator'
import Article from '../article'
import { fetchArticles } from '../../actions/artciles'
import 'antd/dist/antd.css';
import classes from './articleList.module.scss'

const ArticleList = ({ data, loading, err, fetchArticles, }) => {
    const history = useHistory()
    const { page } = useParams()
    useEffect(() => {
        fetchArticles(page)
    }, [fetchArticles, page ])

    if (loading) return <Spinner />
    if (err) return <ErrorIndicator />

    const listItems = data.map(article => <li key={article.slug}> <Article article={article} /> </li>)
    return (
        <>
            <ul>
                {listItems}
            </ul>
            <div className={classes.pagination_wrapper}>
                <Pagination 
                    className={classes.pagination} 
                    defaultPageSize={5} 
                    pageSize={5} 
                    total={25} 
                    current={+page} 
                    onChange={(page) => {  
                        history.push(`${page}`)
                        }} />
            </div>
        </>
    )
}

ArticleList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,

}

const mapStateToProps = ({ articles: { data, loading, err } }) => {
    return {
        data,
        loading,
        err,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchArticles,
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList)
