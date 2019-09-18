import React, { Component } from 'react';
import { connect } from 'react-redux';


class Book extends Component {
    state = {
        book: []
    }
   componentDidMount(){
       let id
       id = parseInt(this.props.match.params.book_id)
       console.log(id)
       console.log(this.props.location)
       console.log(this.props.match)
       let books
        if (this.props.currentUser) {
            books = this.props.currentUser.attributes.books.books.find(book => book.id === id)
            console.log(typeof(id))
            this.setState({
                book: books
            })
        }


   }
    render() {
        
        return ( 
            <div className="book-show-page">
               <div className="book-info">
                   {console.log(this.state)}
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
