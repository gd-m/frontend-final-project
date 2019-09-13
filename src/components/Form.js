import React from 'react';
import {connect} from 'react-redux'
import {updateBookForm} from '../actions/bookForm'
import {newBook} from '../actions/newBook'

const Form = ({updateBookForm, bookForm, newBook}) => {
    const handleOnChange = event => {
        const {name, value} = event.target
        const updateInfo = {
            ...bookForm,
            [name]: value
        }

        updateBookForm(updateInfo)
    }

    const handleSubmit = event => {
        event.preventDefault()
        newBook(bookForm)
        
    }
        return ( 
            <div>
                <form onSubmit={handleSubmit}>
                    <p>Title:<input type="text" onChange={handleOnChange} value={bookForm.title} name="title" /></p>
                    <p>Author:<input type="text" onChange={handleOnChange} value={bookForm.author} name="author" /></p>
                    <input type="submit"/>
                </form>
            </div>
         );
    
}

const mapStateToProps = (state) => {
    return {
        bookForm: state.bookForm
    }
}
 
export default connect(mapStateToProps, {updateBookForm, newBook}) (Form);