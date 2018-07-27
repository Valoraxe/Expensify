import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import Store from './store/configureStore'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
// import { addExpense } from './actions/expenses'
// import { setTextFilter } from './actions/filters'
// import getVisibleExpenses from './selectors/expenses'

const store = Store

// store.dispatch(addExpense({description: 'Water Bill', amount: 1200, createdAt: -1200 }))
// store.dispatch(addExpense({description: 'Gas Bill', amount: 1000, createdAt: -600 }))
// store.dispatch(addExpense({description: 'Rent', amount: 1095, createdAt: 450 }))
// store.dispatch(setTextFilter("bill"))

// setTimeout(() => {
//   store.dispatch(setTextFilter("bill"))
// }, 3000)

// const state = store.getState()
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

const appRoot = document.getElementById("myApp");

const jsx = (
  <Provider store={store}>
    <AppRouter/>
  </Provider>
)

ReactDOM.render(jsx, appRoot);

// class NewSyntax {
//   name = "Rob";
//   getGreeting = () => {
//     return `Hi, my name is ${this.name}.`;
//   }
// }
//
// const newSyntax = new NewSyntax();
// console.log(newSyntax.getGreeting())
