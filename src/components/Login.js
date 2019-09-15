import React from 'react';
import {connect} from 'react-redux'
import {updateLoginForm} from '../actions/loginForm'
import {login} from '../actions/currentUser'
import {withRouter} from 'react-router-dom'

const Login = ({updateLoginForm, login, loginForm, history}) => {
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
        login(loginForm, history)
        
    }

    return (
        <div className="main-container">
            <h1>Login Page</h1> 
            <form onSubmit={handleSubmit} >
                <span>Username:</span><input placeholder="username" type="text" value={loginForm.username} name="username" onChange={handleInputChange} /><br></br>
                <span>Password:</span><input placeholder="password" type="text" value={loginForm.password} name="password" onChange={handleInputChange} /><br></br>
                <input className="submit-button" type="submit" value="Login" />
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        loginForm: state.loginForm
    }
}

export default withRouter(connect(mapStateToProps, {updateLoginForm, login}) (Login))