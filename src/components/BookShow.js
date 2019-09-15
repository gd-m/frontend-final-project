import React from 'react';

const BookShow = ({match}) => {
    return (
        <div>{match.params.id}</div>
    )
}

export default BookShow