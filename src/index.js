import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store'
import App from './components/app'
import ErrorBoundary from './components/errorBoundary'
import BlogService from './services/blogService'
import { BlogServiceProvider } from './components/blogServiceContext'
import './index.css'

const blogService = new BlogService()

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <BlogServiceProvider value={blogService}>
        <Router>
          <App />
        </Router>
      </BlogServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);

