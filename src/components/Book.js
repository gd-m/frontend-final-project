import React, { Component } from 'react';
import { connect } from 'react-redux';


class Book extends Component {
    state = {
        book: []
    }
   componentDidMount(){
       let id
       id = this.props.match.params.book_id
       console.log(id)
       console.log(this.props.location)
       console.log(this.props.match)
       let books
        if (this.props.currentUser) {
            books = this.props.currentUser.attributes.books.books[id-1]
            this.setState({
                book: books
            })
        }
        console.log(books[id-1])
        console.log(books[6])


   }
    render() {
        
        return ( 
            <div className="book-show-page">
               <div className="book-info">
                    <h1>{this.state.book.title}</h1>
                    <h4>By : {this.state.book.author}</h4>
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
 
export default connect(mapStateToProps) (Book)
