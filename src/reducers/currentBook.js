export default (state = null, action) => {
    switch(action.type) {
        case "CURRENT_BOOK_INFO":
            console.log("action selected")
            return action.book
        default:
            return state
    }
}