import {resetLoginForm} from './loginForm'

export const login = (credentials, history) => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        } )
        .then(r => r.json())
        .then(response => {
            if(response.error){
                console.log(response.error)
            } else {
                dispatch(setCurrentUser(response.data))
                dispatch(resetLoginForm())
                history.push('/')
                
            }
        })
    }
}

export const logout = () => {
    
    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch("http://localhost:3001/api/v1/logout",{ 
            method: "DELETE",
            credentials: "include"
        })
        .then(r => r.json())
    }
}

export const setCurrentUser = (user) => {
    return {
        type: 'SET_CURRENT_USER',
        user
    }
}

export const clearCurrentUser = () => {
    return{
        type: "CLEAR_CURRENT_USER"
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/get_current_user", {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
           
        })
        .then(r => r.json())
        .then( res => {
            if (res.error) {
                console.log(res.error)
            } else {
                dispatch(setCurrentUser(res.data))
            }
        }

        )
        
    }
}

