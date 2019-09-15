
import React, { Component } from 'react';
import{Route, Switch} from 'react-router-dom'
import {withRouter} from 'react-router-dom'
import Login from './components/Login'
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/currentUser'
import Logout from './components/Logout'
import BookCard from './components/BookCard'
import Welcome from './components/Welcome'
import MainContainer from './components/MainContainer'
import Navbar from './components/Navbar'
import FormContainer from './containers/FormContainer';
import Signup from './components/Signup';
import Footer from './components/Footer'
class App extends Component {

  
  componentDidMount() {
    this.props.getCurrentUser()
  }

  
  render() {

    let books

    if (this.props.currentUser) {
      books = this.props.currentUser.attributes.books.books.map(book => {
         return <BookCard key={book.id} books={book} />
      })
      
    }
   
    return ( 
      <div className="App">
        <Navbar />
        <div className="main">
      <Switch>
      <Route exact path="/" render={() => (this.props.currentUser) ? <MainContainer /> : <Welcome />} />
      <Route exact path="/signup" render={()=><Signup/>}/>
      <Route exact path="/login" render={()=><Login />} />
      </Switch>
      </div>
        <Footer />
      </div>
     );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default withRouter(connect (mapStateToProps, {getCurrentUser}) (App))
