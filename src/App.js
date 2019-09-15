
import React, { Component } from 'react';
import{Route, Switch} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import Login from './components/Login'
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/currentUser'
import Welcome from './components/Welcome'
import MainContainer from './components/MainContainer'
import Navbar from './components/Navbar'
import Signup from './components/Signup';
import Footer from './components/Footer'

import BooksContainer from './components/BooksContainer'


class App extends Component {

  
  componentDidMount() {
    this.props.getCurrentUser()
  }

  
  render() {

   
    return ( 
      <div className="App">
        <Navbar />
        <div className="main">
      <Switch>
      <Route exact path="/" render={() => (this.props.currentUser) ? <MainContainer /> : <Welcome />} />
      <Route exact path="/signup" render={()=><Signup/>}/>
      <Route exact path="/login" render={()=><Login />} />
      <Route exact path="/books" render={()=><BooksContainer />}/>
     
      </Switch>
      </div>
        <Footer />
      </div>
     );
  }
}

const mapStateToProps = (state) => {
  return ({
    currentUser: state.currentUser
  })
}


export default withRouter(connect (mapStateToProps , {getCurrentUser}) (App))
