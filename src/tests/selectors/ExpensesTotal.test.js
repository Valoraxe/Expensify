import selectExpensesTotal from '../../selectors/ExpensesTotal'
import expenses from '../fixtures/expenses'

test("return 0 with no expenses", () => {
  const response = selectExpensesTotal([])
  expect(response).toBe(0)
})

test("should add single expense", () => {
  const result = selectExpensesTotal([expenses[0]])
  expect(result).toBe(300)
})

test("should add multiple expenses", () => {
  const result = selectExpensesTotal([expenses[0], expenses[1]])
  expect(result).toBe(900)
})
