import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from '../header'
import HomePage from '../pages/homePage'
import ArticlePage from '../pages/articlePage'
import SignUpPage from '../pages/signUpPage'
import SignInPage from '../pages/signInPage'
import ProfilePage from '../pages/profilePage'
import CreateArticlePage from '../pages/createArticlePage'
import EditArticlePage from '../pages/editArticlePage'
import { saveUser } from '../../actions/user'
import AuthContext from '../authContext/authContext'
import classes from './app.module.scss';



function App({ saveUser, auth }) {
  const user = JSON.parse(sessionStorage.getItem('user'))
  if (user && !auth) saveUser(user)

  return (
    <AuthContext.Provider value={user}>
      <div className={classes.container}>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Redirect to='/articles/pages/1' />
          </Route>
          <Route path='/articles/pages/:page' exact>
            <HomePage />
          </Route>
          <Route path='/articles/:slug' exact>
            <ArticlePage />
          </Route>
          <Route path='/sign-up' exact>
            <SignUpPage />
          </Route>
          <Route path='/sign-in' exact>
            <SignInPage />
          </Route>
          <Route path='/profile' exact>
            {!user ? <Redirect to='/sign-in' /> : <ProfilePage />}
          </Route>
          <Route path='/new-article' exact>
            {!user ? <Redirect to='/sign-in' /> : <CreateArticlePage />}
          </Route>
          <Route path='/article/:slug/edit' exact>
            <EditArticlePage />
          </Route>
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}


const mapStateToProps = ({ user }) => {
  return { auth : user.user }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ saveUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
