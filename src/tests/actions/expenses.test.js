import {
   startAddExpense,
   addExpense,
   editExpense,
   removeExpense,
   setExpenses,
   startSetExpenses,
   startRemoveExpense,
   startEditExpense
 } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebase/firebase'

const uid = "testID"
const defaultAuth = { authentication: { uid }}
const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
const expensesData = {}
  expenses.forEach(({id, description, note, amount, createdAt }) => {
    expensesData[id] = { description, note, amount, createdAt }
  })
  database.ref(`users/${uid}/expenses`).set(expensesData).then(() => {
    done()
  })
})

//Can't use toBe, if an object/array equals another object/array, it will always come back false
test("should remove expense", () => {
  const action = removeExpense({id: "123abc"})
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: "123abc"
  });
});

test("should remove expense from firebase", (done) => {
  const store = createMockStore(defaultAuth)
  const id = expenses[2].id

  store.dispatch(startRemoveExpense({ id })).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: "REMOVE_EXPENSE",
      id
    })
    return database.ref(`users/${uid}/expenses/${id}`).once("value")
      .then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done()
      })
  })
});

test("should edit expense", () => {
  const action = editExpense('123abc', { note: 'New Note' })
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: "123abc",
    updates: {
      note: "New Note"
    }
  });
});

test("should edit expense on database", (done) => {
  const store = createMockStore(defaultAuth)
  const id = expenses[0].id
  const updates = { description: "changed" }
  store.dispatch(startEditExpense(id, updates)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: "EDIT_EXPENSE",
      id,
      updates
    })
    return database.ref(`users/${uid}/expenses/${id}`).once("value")
      .then((snapshot) => {
        expect(snapshot.val().description).toBe(updates.description)
        done()
      })
  })
})

test("should add expense object with values", () => {
  const action = addExpense(expenses[1])
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: expenses[1]
  })
})

test("should add expense to database + store", (done) => {
  const store = createMockStore(defaultAuth)
  const expenseData = {
    description: "4th",
    amount: 2300,
    note: "jjajajajajaj",
    createdAt: 300
  }

  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value")
    }).then((snapshot) => {
      expect(snapshot.val()).toEqual(expenseData)
      done()
  })
})

test("should add expense defaults to db + store", (done) => {
  const store = createMockStore(defaultAuth)
  const expenseData = {
    description: "",
    note: "",
    amount: 0,
    createdAt: 0
  }

  store.dispatch(startAddExpense({})).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: "ADD_EXPENSE",
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    })
    return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value")
    }).then((snapshot) => {
    expect(snapshot.val()).toEqual(expenseData)
    done()
  })
})

test("setup expenses action with data", () => {
  const action = setExpenses(expenses)
  expect(action).toEqual({
    type: "SET_EXPENSES",
    expenses
  })
})

test("should fetch expenses from firebase", (done) => {
  const store = createMockStore(defaultAuth)
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions()
    expect(actions[0]).toEqual({
      type: "SET_EXPENSES",
      expenses
    })
    done()
  })
})
