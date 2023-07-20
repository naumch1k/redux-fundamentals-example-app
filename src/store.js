import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import { loggerMiddleware } from './exampleAddons/middleware'

const middlewareEnhancer = applyMiddleware(loggerMiddleware)

const store = createStore(rootReducer, middlewareEnhancer)

export default store
