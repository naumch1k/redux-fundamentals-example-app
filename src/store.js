import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import { delayedMessageMiddleware } from './exampleAddons/middleware'

const middlewareEnhancer = applyMiddleware(delayedMessageMiddleware)

const store = createStore(rootReducer, middlewareEnhancer)

export default store
