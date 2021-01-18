import React from 'react'
import { useForm } from 'react-hook-form'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import FormArea from '../formArea'
import FormField from '../formField'
import { logIn } from '../../actions/user'
import { editProfile } from '../../services/blogService'
import validateSettings from '../../settings/validateSettings'
import validateEditSettings from '../../settings/validateEditSettings'




const ProfilePage = ({ token }) => {
    const methods = useForm()
    const history = useHistory()

    const clearEmpty = (obj) => {
        const values = Object.entries(obj)
        return Object.fromEntries(values.filter(item => !!item[1]))
    }
    
    const onSubmit = async (data) => {
        const user = await editProfile({user: clearEmpty(data)}, token)
        if(user.errors) {
            const {errors : apiErrors} = user
            Object.keys(apiErrors).forEach(item => apiErrors[item].forEach(errMessage => methods.setError('email', { type: 'manual', message: errMessage})))
        }
        if(user.user) {
            logIn(user.user)
            history.push('/')
        }
    }

    return (
        <FormArea methods={methods} onSubmit={onSubmit} title='Edit Profile' btnTxt='Save'>
            <FormField label='Username' type='text' placeholder='Username' name='username' validateObj={validateSettings.userName}/>
            <FormField label='Email address' type='email' placeholder='Email address' name='email' validateObj={validateSettings.email} />
            <FormField label='New password' type='password' placeholder='New password' name='password' validateObj={validateEditSettings.password} />
            <FormField label='Avatar image (url)' type='text' placeholder='Avatar image' name='image' validateObj={validateEditSettings.image} />
        </FormArea>
    )
}

const mapStateToProps = ({ user }) => {
    return { token: user.token }
}

export default connect(mapStateToProps, null)(ProfilePage)