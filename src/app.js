import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter, { history } from './routers/AppRouter'
import Store from './store/configureStore'
import { firebase } from './firebase/firebase'
import { startSetExpenses } from './actions/expenses'
import { login, logout } from './actions/authentication'
import LoadingPage from './components/LoadingPage'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'

const store = Store
const appRoot = document.getElementById("myApp");

let hasRendered = false
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, appRoot);
    hasRendered = true
  }
}

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)

ReactDOM.render(<LoadingPage/>, appRoot)

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(() => {
      renderApp()
      if (history.location.pathname === "/") {
        history.push("/dashboard")
      }
    })
  } else {
    store.dispatch(logout())
    renderApp()
    history.push("/")
  }
})
