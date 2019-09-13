export const updateBookForm = (formData) => {
    return {
        type: "UPDATE_BOOK_FORM",
        formData
    }
}

export const resetBookForm = () => {
    return {
        type: "RESET_BOOK_FORM"
    }
}