export const ARTICLE_LOADING = 'ARTICLE_LOADING'
export const ARTICLE_LOADED = 'ARTICLE_LOADED'
export const ARTICLE_ERR = 'ARTICLE_ERR'

export const articleLoading = () => ({ type: ARTICLE_LOADING })
export const articleLoaded = (data) => ({ type: ARTICLE_LOADED, payload: data })
export const articleErr = (err) => ({ type: ARTICLE_ERR, payload: err })


export const fetchArticle = (blogService, slug)  => (dispatch) => {
    dispatch(articleLoading)
    console.log(blogService.getArticle(slug))
    blogService.getArticle(slug)
        .then((data) => dispatch(articleLoaded(data)))
        .catch((err) => dispatch(articleErr(err)))
}