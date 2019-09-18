import {resetBookForm} from './bookForm'
export const newBook = (data, history) => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/books", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json" 
        },
        body: JSON.stringify(data)
    })
    .then(r => r.json())
    .then(res => {
        console.log(res)
        dispatch(resetBookForm())
        history.push('/books')
        window.location.reload()
    })
    }
}