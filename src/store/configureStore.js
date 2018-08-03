import thunk from 'redux-thunk'
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
import authReducer from '../reducers/authentication'

const reduxTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer,
  authentication: authReducer
})

const store = createStore(rootReducer, reduxTools(applyMiddleware(thunk)))

export default store
