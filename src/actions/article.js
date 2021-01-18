import { getArticle } from '../services/blogService';

export const ARTICLE_LOADING = 'ARTICLE_LOADING';
export const ARTICLE_LOADED = 'ARTICLE_LOADED';
export const ARTICLE_ERR = 'ARTICLE_ERR';

export const articleLoading = () => ({ type: ARTICLE_LOADING });

export const articleLoaded = (data) => ({ type: ARTICLE_LOADED, payload: data });
export const articleErr = (err) => ({ type: ARTICLE_ERR, payload: err });

export const fetchArticle = (slug) => (dispatch) => {
  dispatch(articleLoading());
  getArticle(slug)
    .then((data) => dispatch(articleLoaded(data)))
    .catch((err) => dispatch(articleErr(err)));
};
