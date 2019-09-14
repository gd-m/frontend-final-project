import React, { Component } from 'react';
import {logout} from '../actions/currentUser'
import { connect } from 'react-redux'

class Navbar extends Component {

    render() {
        let menu 
        if(this.props.currentUser) {
            menu = (
                <ul className="navbar-ul">
                    <li className="navbar-li"><a href="/">Home</a></li>
                    <li className="navbar-li"><a href="/books">Books</a></li>
                    <li className="navbar-li"> <a href="/" onClick={this.props.logout}>logout</a></li>
                </ul>
           ) 
        } else {
          menu= ( 
              <ul className="navbar-ul">
                  <li className="navbar-li"><a href="/login">Login</a></li>
                  <li className="navbar-li"><a href="/signup">SignUp</a></li>
              </ul> 
          )
        }
        
        return ( 
        <div className="navbar">
            <div><a href="/">Notebook</a></div>
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