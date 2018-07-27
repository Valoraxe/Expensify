import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'
import 'react-dates/initialize'

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount:  props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      toEdit: props.toEdit
    }
  }
  descriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({ description }))
  }
  noteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }
  amountChange = (e) => {
    const amount = e.target.value
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }
  changeDate = (createdAt) => {
    if(createdAt) {
      this.setState(() => ({ createdAt }))
    }
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }))
  }
  onSubmit = (e) => {
    e.preventDefault()
    if(!this.state.description || !this.state.amount) {
      this.setState(() => ({error: "Please set description & amount"}))
      this.state.errorOnSubmit = true
    } else {
      this.setState(() => ({error: ""}))
      this.state.errorOnSubmit = false
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form-error">{this.state.error}</p>}
        <input
          type="text"
          className="text-input"
          placeholder="Description"
          autoFocus
          value={this.state.description}
          onChange={this.descriptionChange}
        />
        <input
          type="text"
          className="text-input"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.amountChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.changeDate}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          placeholder="Add a note"
          className="textarea"
          value={this.state.note}
          onChange={this.noteChange}
        >
        </textarea>
        <div>
          {this.state.toEdit
            ? <button className="button">Save Changes</button>
            : <button className="button">Add Expense</button>
          }
        </div>
      </form>
    )
  }
}
