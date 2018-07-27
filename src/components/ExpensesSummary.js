import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/ExpensesTotal'

export const ExpensesSummary = ({ visibleExpenseCount, invisibleExpenseCount, expensesTotal }) => {
  const expenseWord = visibleExpenseCount === 1 ? "expense" : "expenses"
  const invisibleWord = invisibleExpenseCount === 1 ? "expense" : "expenses"
  const areOrIs = invisibleExpenseCount === 1 ? "is" : "are"
  const formatTotal = numeral(expensesTotal / 100).format("0,0.00")
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header_title">
          Viewing <span>{visibleExpenseCount}</span> {expenseWord} totalling <span>£{formatTotal}</span>
        </h1>
        {invisibleExpenseCount === 0
          ? <h2 className="page-header_title">There are no hidden expenses</h2>
          : <h2 className="page-header_title">
              Currently <span>{invisibleExpenseCount}</span> {invisibleWord} {areOrIs} hidden due to the current filter
            </h2>
        }
        <div className="page-header_actions">
          <Link to="/create" className="button">Add Expense</Link>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  const invisibleExpenses = state.expenses.length - visibleExpenses.length

  return {
    visibleExpenseCount: visibleExpenses.length,
    invisibleExpenseCount: invisibleExpenses,
    expensesTotal: selectExpensesTotal(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary)
