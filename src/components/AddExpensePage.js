import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { startAddExpense } from '../actions/expenses'

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense)
    this.props.history.push("/dashboard")
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header_title">Add Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            toEdit={this.props.toEdit}
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  toEdit: false
})

const mapDispatchToProps = (dispatch) => {
  return {
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddExpensePage)
