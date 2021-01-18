import { combineReducers } from 'redux';
import articles from './articles';
import article from './article';
import user from './user';

export default combineReducers({ articles, article, user });
