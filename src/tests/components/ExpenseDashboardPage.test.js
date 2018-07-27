import React from 'react'
import { shallow } from 'enzyme'
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'
import expenses from '../fixtures/expenses'

test("render expense list item", () => {
  const wrapper = shallow(<ExpenseDashboardPage/>)
  expect(wrapper).toMatchSnapshot()
})
