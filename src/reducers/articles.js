import { ARTICLES_LOADING, ARTICLES_LOADED, ARTICLES_ERR } from '../actions/artciles';

const articlesState = {
  data: [],
  loading: true,
  err: false,
};

const articles = (state = articlesState, action) => {
  switch (action.type) {
    case ARTICLES_LOADING:
      return { ...state, loading: true };
    case ARTICLES_LOADED:
      return { ...state, data: action.payload, loading: false };
    case ARTICLES_ERR:
      return { ...state, loading: false, err: true };
    default:
      return state;
  }
};

export default articles;
