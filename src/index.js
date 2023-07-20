import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import './api/server'

import store from './store'

console.log('initial state: ', store.getState())

const unsubscribe = store.subscribe(() =>
  console.log('state after dispatch: ', store.getState())
)

store.dispatch({
  type: 'todos/todoAdded',
  payload: 'Learn about actions'
})

unsubscribe()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
