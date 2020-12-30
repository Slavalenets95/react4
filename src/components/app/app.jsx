import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux'
import Header from '../header'
import ArticleList from '../articleList'
import UserAvatar from '../userAvatar'
import HomePage from '../pages/homePage'
import ArticlePage from '../pages/articlePage'
import classes from './app.module.scss';


function App({body}) {
  return (
    <div className={classes.container}>
      <Header />
      <Route path='/' exact component={HomePage} />
      <Route path='/articles' exact component={HomePage} />
      <Route path='/articles/:id' 
             render={({ match }) => {
              const { id } = match.params
              return <ArticlePage slug={id} />
             }} 
      
      />

    </div>
  );
}

const mapStateToProps = ({ articles: {body}}) => {
    return {body}
}


export default connect(mapStateToProps)(App);
