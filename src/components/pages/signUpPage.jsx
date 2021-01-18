import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { register } from '../../services/blogService'
import FormArea from '../formArea'
import FormField from '../formField'
import validateSettings from '../../settings/validateSettings'
import { logIn } from '../../actions/user'
import FormFieldCheckbox from '../formFieldCheckbox'

const SignUpPage = ({ logIn }) => {
    const methods = useForm()
    const password = methods.watch('password')
    const history = useHistory()
    const onSubmit = async (data) => {
        const user = await register({user: data})
        if(user.errors) {
            const {errors : apiErrors} = user
            Object.keys(apiErrors).forEach(item => apiErrors[item].forEach(errMessage => methods.setError(item, { type: 'manual', message: errMessage})))
        }
        if(user.user) {
            logIn(user.user)
            history.push('/')
        }
    }

    return (
            <FormArea methods={methods} onSubmit={onSubmit} title='Create new account' footerTxt='Already have an account?' footerLink='Sign In.' btnTxt='Create' >
                <FormField label='Username' type='text' placeholder='Username' name='username' validateObj={validateSettings.userName}
                />
                <FormField label='Email' type='email' placeholder='Email address' name='email' validateObj={validateSettings.email}
                />
                <FormField label='Password' type='password' placeholder='Password' name='password' validateObj={validateSettings.password}
                />
                <FormField label='Repeat password' type='password' placeholder='Password' name='repeatpassword' validateObj={{...validateSettings.password, validate: value => value === password || 'Пароли не совпадают.'}}
                />
                <FormFieldCheckbox label='I agree to the processing of my personal information' type='checkbox' name='license' id='license' validateObj={validateSettings.license} />
            </FormArea>
    )
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ logIn }, dispatch)
}

export default connect(null, mapDispatchToProps)(SignUpPage)