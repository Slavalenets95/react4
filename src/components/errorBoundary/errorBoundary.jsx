import React  from 'react'
import PropTypes from 'prop-types'
import ErrorIndicator from '../errorIndicator'
// import classes from './errorBoundary.module.scss'

export default class ErrorBoundary extends React.Component {

    static propTypes = {
        children: PropTypes.element.isRequired
    }

    state = {
        hasError: false
    }

    componentDidCatch() {
        this.setState( { hasError: true })
    }

    render() {
       const {children} = this.props
       const {hasError} = this.state
       if(hasError) return <ErrorIndicator />
       return children
    }
}
