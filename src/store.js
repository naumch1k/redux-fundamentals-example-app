import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer'
import { delayedMessageMiddleware } from './exampleAddons/middleware'

const middlewareEnhancer = composeWithDevTools(
  applyMiddleware(delayedMessageMiddleware)
)

const store = createStore(rootReducer, middlewareEnhancer)

export default store
