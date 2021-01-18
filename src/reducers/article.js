import { ARTICLE_LOADING, ARTICLE_LOADED, ARTICLE_ERR } from '../actions/article';

const articleState = {
  article: {},
  loading: true,
  err: false,
};

const article = (state = articleState, action) => {
  switch (action.type) {
    case ARTICLE_LOADING:
      return { ...state, loading: true };
    case ARTICLE_LOADED:
      return { ...state, article: action.payload, loading: false };
    case ARTICLE_ERR:
      return { ...state, loading: false, err: true };
    default:
      return state;
  }
};

export default article;
