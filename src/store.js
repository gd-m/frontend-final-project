import {createStore, applyMiddleware, combineReducers , compose} from 'redux'
import thunk from 'redux-thunk'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'
import signupForm from './reducers/signupNewUser'
import bookForm from './reducers/bookForm'

const rootReducer = combineReducers({
    currentUser,
    loginForm,
    signupForm,
    bookForm
  
}) 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers( applyMiddleware(thunk)));
  

export default store