import React from 'react'
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'

export class EditExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense)
    this.props.history.push("/")
  }
  onRemove = () => {
    this.props.removeExpense({id: this.props.expense.id})
    this.props.history.push("/")
  }
  render() {
    return (
      <div>
        <div className="page-header">
          <div className="content-container">
            <h1 className="page-header_title">Edit Expense</h1>
          </div>
        </div>
        <div className="content-container">
          <ExpenseForm
            toEdit={this.props.toEdit}
            expense={this.props.expense}
            onSubmit={this.onSubmit}
          />
          <button className="button button-secondary" onClick={this.onRemove}>Remove Expense</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find((expense) => expense.id === props.match.params.id),
  toEdit: true
})

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (id, expense) => dispatch(editExpense(id, expense)),
  removeExpense: (data) => dispatch(removeExpense(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)