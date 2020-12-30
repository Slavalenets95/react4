export const ARTICLES_LOADING = 'ARTICLES_LOADING'
export const ARTICLES_LOADED = 'ARTICLES_LOADED'
export const ARTICLES_ERR = 'ARTICLES_ERR'
export const ARTICLES_PAGINATION = 'ARTICLES_PAGINATION'

export const articlesLoading = () => ({ type: ARTICLES_LOADING })
export const articlesLoaded = (data) => ({ type: ARTICLES_LOADED, payload: data })
export const articlesErr = (err) => ({ type: ARTICLES_ERR, payload: err })
export const articlesPagination = (page, pageSize) => ({ type: ARTICLES_PAGINATION, payload: page*pageSize})

export const fetchArticles = (blogService, pagination, limit=5)  => (dispatch) => {
    dispatch(articlesLoading)
    blogService.getArticles(pagination,limit)
        .then((data) => dispatch(articlesLoaded(data)))
        .catch((err) => dispatch(articlesErr(err)))
}