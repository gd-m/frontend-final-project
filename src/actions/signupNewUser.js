import { setCurrentUser } from "./currentUser";

export const updateSignupForm = (formData) => {
    return {
        type: "UPDATE_SIGNUP_FORM",
        formData
    }
}

export const resetSignupForm = () => {
    return {
        type: "RESET_SIGNUP_FORM"
    }
}

export const signup = credentials => {
    return dispatch => {
        const userInfo = {
            user: credentials
        }
        return fetch("http://localhost:3001/api/v1/signup", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        } )
        .then(r => r.json())
        .then(response => {
            if(response.error){
                console.log(response.error)
            } else {
                dispatch(setCurrentUser(response.data))
                dispatch(resetSignupForm())
                
            }
        })
    }
}
