import React, { Component } from 'react';
import {logout} from '../actions/currentUser'
import { connect } from 'react-redux'
import Login from './Login'

import Signup from './Signup'
class Navbar extends Component {

    render() {
        let menu 
        if(this.props.currentUser) {
            menu = <a href="/" onClick={this.props.logout}>logout</a>
        } else {
          menu=  <div><Login /><br></br> <Signup /></div>
        }
        
        return ( 
        <div>
            <div>Notebook</div>
            {menu}
        </div>
         );
    }
}

const mapStateToProps = ({currentUser}) => {
    return {
        currentUser
    }
}
 
export default connect (mapStateToProps, {logout}) (Navbar);