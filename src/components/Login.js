import React from 'react';
import {connect} from 'react-redux'
import {updateLoginForm} from '../actions/loginForm'
import {login} from '../actions/currentUser'

const Login = ({updateLoginForm, login, loginForm}) => {
    const handleInputChange = event => {
        const {name, value} = event.target
        const updateInfo = {
            ...loginForm,
            [name]: value
        }

        updateLoginForm(updateInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginForm)
        
    }

    return (
        <div>
            <h1>Login Page</h1> 
            <form onSubmit={handleSubmit} >
                <span>Username:</span><input placeholder="username" type="text" value={loginForm.username} name="username" onChange={handleInputChange} /><br></br>
                <span>Password:</span><input placeholder="password" type="text" value={loginForm.password} name="password" onChange={handleInputChange} /><br></br>
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
    }
}

export default connect(mapStateToProps, {updateLoginForm, login}) (Login)