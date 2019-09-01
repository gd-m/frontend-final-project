import React from 'react';

const BookCard = (props) => {
    return (
        <div key={props.id}>
           <h3> {props.title}</h3>
           <p>Author: {props.author}</p>
        </div>
    )
} 

export default BookCard