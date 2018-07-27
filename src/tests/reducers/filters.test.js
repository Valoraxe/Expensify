import FiltersReducer from '../../reducers/filters'
import moment from 'moment'

test("should setup default filters", () => {
  const state = FiltersReducer(undefined, { type: "@@INIT"})
  expect(state).toEqual({
    text: "",
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
})

test("should set sortBy amount", () => {
  const state = FiltersReducer(undefined, {type: "SORT_BY_AMOUNT"})
  expect(state.sortBy).toBe("amount")
})

test("should set sortBy date", () => {
  const currentState = {
    text: "",
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  }
  const state = FiltersReducer(currentState, {type: "SORT_BY_DATE"})
  expect(state.sortBy).toBe("date")
})

test("set text filter", () => {
  const text = "rent"
  const action = {
    type: "SET_TEXT_FILTER",
    text: text
  }
  const state = FiltersReducer(undefined, action)
  expect(state.text).toBe(text)
})

test("set start Date", () => {
  const startDate = moment()
  const action = {
    type: "SET_START_DATE",
    date: startDate
  }
  const state = FiltersReducer(undefined, action)
  expect(state.startDate).toEqual(startDate)
})

test("set end Date", () => {
  const endDate = moment();
  const action = {
    type: "SET_END_DATE",
    date: endDate
  }
  const state = FiltersReducer(undefined, action)
  expect(state.endDate).toEqual(endDate)
})
