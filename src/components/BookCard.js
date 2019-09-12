import React from 'react';

const BookCard = (props) => {
    return (
        <div key={props.books.id}>
            {console.log(props.books)}
           <h3> {props.books.title}</h3>
           <p>Author: {props.books.author}</p>
        </div>
    )
} 

export default BookCard