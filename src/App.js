
import React, { Component } from 'react';
import './App.css';
import Login from './components/Login'
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/currentUser'
import Logout from './components/Logout'
import BookCard from './components/BookCard'

import Navbar from './components/Navbar'

class App extends Component {

  
  componentDidMount() {
    this.props.getCurrentUser()
    
  }

  
  render() {
   
    return ( 
      <div className="App">
      <Navbar />
      
      
      </div>
     );
  }
}

const mapStateToProps = (state) => {
  return {currentUser: state.currentUser}
}

export default connect (mapStateToProps, {getCurrentUser}) (App);
