import React from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FormArea from '../formArea'
import FormField from '../formField'
import { logIn } from '../../actions/user'
import { authentification } from '../../services/blogService'
import validateSettings from '../../settings/validateSettings'


const SignInPage = ({ logIn }) => {
    const methods = useForm()
    const history = useHistory()

    const onSubmit = async (data) => {
        const user = await authentification({user: data})

        if(user.errors) {
            const {errors : apiErrors} = user
            Object.keys(apiErrors).forEach(item => apiErrors[item].forEach(errMessage => methods.setError('email', { type: 'manual', message: `Email or password ${errMessage}`})))
        }
        if(user.user) {
            logIn(user.user)
            history.push('/')
        }
    }

    return (
        <FormArea methods={methods} onSubmit={onSubmit} title='Sign In' footerTxt='Don’t have an account? ' btnTxt='Login' footerLink='Sign Up.' >
            <FormField label='Email address' type='email' placeholder='Email address' name='email' validateObj={validateSettings.email} />
            <FormField label='Password' type='password' placeholder='Password' name='password' validateObj={validateSettings.password} />
        </FormArea>
    )
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ logIn }, dispatch)
}

export default connect(null, mapDispatchToProps)(SignInPage)