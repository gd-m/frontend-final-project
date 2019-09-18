import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookCard from "./BookCard";
import {withRouter} from 'react-router-dom'

class BooksContainer extends Component {

   
    render() { 
        let books
        if (this.props.currentUser) {
            books = this.props.currentUser.attributes.books.books.map(book => {
                return (
                    <BookCard key={book.id} books={book}/>
                )
            })
        }
        return ( 
            <div>
                <div>
                <h1>All Books</h1>
                <a href="/books/new"><button className="submit-button">Add New Book</button></a> 
                </div>
                <div className="book-container">
                {books}
                </div>
                
            </div>
         );
    }
}
 
const mapStateToProps = (state) => {
    return ({
        currentUser: state.currentUser
    })
}
export default withRouter(connect(mapStateToProps) (BooksContainer));