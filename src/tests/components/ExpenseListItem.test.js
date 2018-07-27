import React from 'react'
import { shallow } from 'enzyme'
import ExpneseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expenses'

test("render expense list item", () => {
  const wrapper = shallow(<ExpneseListItem {...expenses[0]} />)
  expect(wrapper).toMatchSnapshot()
})
