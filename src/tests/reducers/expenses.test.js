import ExpensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test("should set default state", () => {
  const state = ExpensesReducer(undefined, { type: "@@INIT" })
  expect(state).toEqual([])
})

test("remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[0].id
  }
  const state = ExpensesReducer(expenses, action)
  expect(state).toEqual([expenses[1], expenses[2]])
})

test("stop remove if no id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1"
  }
  const state = ExpensesReducer(expenses, action)
  expect(state).toEqual([expenses[0], expenses[1], expenses[2]])
})

test("add new expense", () => {
  const expense = {
    id: "4",
    description: "New One",
    note: "",
    amount: 100,
    createdAt: 1000
  }
  const action = {
    type: "ADD_EXPENSE",
    expense
  }
  const state = ExpensesReducer(expenses, action)
  expect(state).toEqual([...expenses, expense])
})

test("edit new expense", () => {
  const amount = 12220
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates: {
      amount
    }
  }
  const state = ExpensesReducer(expenses, action)
  expect(state[1].amount).toBe(amount)
})

test("stop edit new expense", () => {
  const amount = 12220
  const action = {
    type: "EDIT_EXPENSE",
    id: "-1",
    updates: {
      amount
    }
  }
  const state = ExpensesReducer(expenses, action)
  expect(state).toEqual(state)
})
