import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import PropTypes from 'prop-types';
import { Pagination } from 'antd'
import Spinner from '../spinner'
import ErrorIndicator from '../errorIndicator'
import ArticleListItem from '../articleListItem'
import withBlogService from '../hoc/withBlogService'
import { fetchArticles, articlesPagination } from '../../actions/artciles'
import 'antd/dist/antd.css';
import classes from './articleList.module.scss'


const ArticleList = ({ blogService, data, loading, err, pagination, fetchArticles, articlesPagination, }) => {

    useEffect(() => {
        fetchArticles(blogService, pagination)
    }, [fetchArticles, pagination, blogService])

    if (loading) return <Spinner />
    if (err) return <ErrorIndicator />

    const listItems = data.map(article => <ArticleListItem {...article} />)
    return (
        <>
            <ul>
                {listItems}
            </ul>
            <div className={classes.pagination_wrapper}>
                <Pagination className={classes.pagination} defaultPageSize={5} pageSize={5} total={25} current={pagination / 5} onChange={(page, pageSize) => { articlesPagination(page, pageSize) }} />
            </div>
        </>
    )
}

ArticleList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    articlesPagination: PropTypes.func.isRequired,
}

const mapStateToProps = ({ articles: { data, loading, err, pagination, } }) => {
    return {
        data,
        loading,
        err,
        pagination,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchArticles,
        articlesPagination
    }, dispatch)
}

export default withBlogService(connect(mapStateToProps, mapDispatchToProps)(ArticleList))
