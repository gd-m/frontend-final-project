import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'


class MainContainer extends Component {
    
    render() { 
        return ( 
        <div>
            <h1>Hello from within Application</h1>
            <p>Successfully Logged In</p>
        </div> );
    }
}
 
export default withRouter(MainContainer);