const initialState = {
    title: '',
    author: ''
}

export default (state = initialState, action) => {
    switch(action.type){
        case 'UPDATE_BOOK_FORM':
            return action.formData
        case 'RESET_BOOK_FORM':
            return initialState
        default:
            return state
    }
}