import React from 'react';
import {Route, Link} from 'react-router-dom';

const BookCard = (props) => {
    return (
        <div className="book-card" key={props.books.id}>
           <h3 className="book-card-title"> {props.books.title}</h3>
           <p className="book-card-author">Author: {props.books.author}</p>
        </div>
    )
} 

export default BookCard