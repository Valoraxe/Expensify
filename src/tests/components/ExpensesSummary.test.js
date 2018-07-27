import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'

test("should render summary with 1 expense, none hidden", () => {
  const wrapper = shallow(<ExpensesSummary visibleExpenseCount={1} invisibleExpenseCount={0} expensesTotal={230}/>)
  expect(wrapper).toMatchSnapshot()
})

test("should render summary with many expenses, some hidden", () => {
  const wrapper = shallow(<ExpensesSummary visibleExpenseCount={5} invisibleExpenseCount={2} expensesTotal={1240}/>)
  expect(wrapper).toMatchSnapshot()
})

test("should render no expenses, 1 hidden", () => {
  const wrapper = shallow(<ExpensesSummary visibleExpenseCount={0} invisibleExpenseCount={1} expensesTotal={0}/>)
  expect(wrapper).toMatchSnapshot()
})
