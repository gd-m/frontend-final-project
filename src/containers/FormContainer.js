import Form from '../components/Form'
import React, { Component } from 'react';


class FormContainer extends Component {
    state = { 
        isdisplayForm: false
     }
    
    handleClick = () => {
        this.setState({
            isdisplayForm: !this.state.isdisplayForm
        })
    }

    render() { 
        let form
        if(this.state.isdisplayForm) {  
                form = (
                <div>
                    <Form />
                </div>)
            
        }

        return ( 
        <div>
            <button onClick={this.handleClick}>Add New Book</button>
            <div>
            {form}
            </div>
        </div>
         );
    }
}
 
export default FormContainer;
