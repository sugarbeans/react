import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/index'

const initialState = {}
const middleware = [thunk];
//export const store = createStore(rootReducer, initialState, applyMiddleware(...middleware))
export const store = createStore(rootReducer, initialState, 
  compose(applyMiddleware(...middleware),
  //window._REDUX_DEVTOOLS_EXTENSION__ && window._REDUX_DEVTOOLS_EXTENSION__()
  ))
