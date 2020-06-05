import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import { startGetUsers } from './actions/usersAction'
import { startGetPosts } from './actions/postsAction'

const store = configureStore()

console.log('store initial state', store.getState())
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(startGetUsers())
store.dispatch(startGetPosts())

const jsx = (
    <Provider store={store}>
        <App />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('root'))