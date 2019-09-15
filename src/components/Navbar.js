import React, { Component } from 'react';
import {logout} from '../actions/currentUser'
import { connect } from 'react-redux'

class Navbar extends Component {

    render() {
        let menu 
        if(this.props.currentUser) {
            menu = (
                <ul className="navbar-ul">
                    <li className="navbar-li li-home"><a href="/">Home</a></li>
                    <li className="navbar-li li-books"><a href="/books">Books</a></li>
                    <li className="navbar-li li-logout"> <a href="/" onClick={this.props.logout}>logout</a></li>
                </ul>
           ) 
        } else {
          menu= ( 
              <ul className="navbar-ul">
                  <li className="navbar-li li-login"><a href="/login">Login</a></li><br/>
                  <li className="navbar-li li-signup"><a href="/signup">SignUp</a></li>
              </ul> 
          )
        }
        
        return ( 
        <div className="navbar">
            <div className="brand-name"><h3><a href="/">NOTEBOOK</a></h3></div>
            <div className="navbar-menu">
            {menu}
            </div>
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