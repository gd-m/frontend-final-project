import React, { Component } from 'react';
import {connect} from 'react-redux'
import {signup} from '../actions/signupNewUser'
import {updateSignupForm} from '../actions/signupNewUser'


class Signup extends Component {

    handleOnChange = event => {
        const{name, value} = event.target
        const updateInfo = {
            ...this.props.signupForm,
            [name]: value
        }

        this.props.updateSignupForm(updateInfo)
    }

    handleOnSubmit = event => {
        event.preventDefault()
        this.props.signup(this.props.signupForm)
    }


    
    render() { 
        return ( 
            <div>
                <h1>Sign Up </h1>
                <form onSubmit={this.handleOnSubmit}>
                    <span>First Name: </span> <input type="text" placeholder="first name" value={this.props.signupForm.first_name} name="first_name" onChange={this.handleOnChange} /><br />
                    <span>Last Name: </span> <input type="text" placeholder="last name" value={this.props.signupForm.last_name} name="last_name" onChange={this.handleOnChange} /><br />
                    <span>Username: </span> <input type="text" placeholder="username" value={this.props.signupForm.username} name="username" onChange={this.handleOnChange} /><br />
                    <span>Password: </span> <input type="password" placeholder="password" value={this.props.signupForm.password} name="password" onChange={this.handleOnChange} /><br />
                    <input className="submit-button" type="submit" value="Sign Up"  />
                </form>
            </div>
         );
    }
}

const mapStateToProps = ({signupForm}) => {
    return {
        signupForm
    }
}
 
export default connect (mapStateToProps, {updateSignupForm, signup}) (Signup);