import React from 'react';
import {Link} from 'react-router-dom';

const BookCard = (props) => {

   
    return (
        <Link  id={`${props.books.id}`} to={`/books/${props.books.id}`} className="book-links">
        <div  onClick={props.onBookClick} className="book-card" key={props.books.id}>
           <h3 className="book-card-title"> {props.books.title}</h3>
           <p className="book-card-author">Author: {props.books.author}</p>
        </div></Link>
    )
} 



export default BookCard