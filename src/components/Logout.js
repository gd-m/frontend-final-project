import React, { Component } from 'react';
import {connect} from 'react-redux'
import {logout} from '../actions/currentUser'

class Logout extends Component {
    render() { 
        return ( 
            <div>
                <button onClick={this.props.logout}>Logout</button>
            </div>
         );
    }
}
 
export default connect(null, {logout}) (Logout);