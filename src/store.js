import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'

const middlewareEnhancer = composeWithDevTools(
  applyMiddleware(thunkMiddleware)
)

const store = createStore(rootReducer, middlewareEnhancer)

export default store
