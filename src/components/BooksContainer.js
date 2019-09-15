import React, { Component } from 'react';
import { connect } from 'react-redux';
import BookCard from "./BookCard";

class BooksContainer extends Component {
   
    render() { 
        let books
        if (this.props.currentUser) {
            books = this.props.currentUser.attributes.books.books.map(book => {
                return (
                    <BookCard books={book}/>
                )
            })
        }
        return ( 
            <div>
                <h1>All Books</h1>
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
export default connect(mapStateToProps) (BooksContainer);