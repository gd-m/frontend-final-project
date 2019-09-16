import React, { Component } from 'react';

class Book extends Component {
   componentDidMount(){
       let id
       id = this.props.match.params.book_id
       console.log(id)
       console.log(this.props.location)
       console.log(this.props.match)

   }
    render() { 
        return ( 
            <div>
                
            </div>
         );
    }
}
 
export default Book;