import { ARTICLES_LOADING, ARTICLES_LOADED, ARTICLES_ERR, ARTICLES_PAGINATION } from '../actions/artciles'

const articlesState = {
    data: [], 
    loading: true,
    err: false,
    pagination: 5,
} 

const articles = (state = articlesState, action) => {
    switch (action.type) {
        case ARTICLES_LOADING : 
            return {...state, loading: true}
        case ARTICLES_LOADED : 
            return {...state, data: action.payload, loading: false}
        case ARTICLES_ERR :
            return {...state, loading: false, err: true}
        case ARTICLES_PAGINATION :
            return {...state, loading: true, pagination: action.payload}
        default :
            return state
    }
}



export default articles 