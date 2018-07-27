import React from 'react'
import { shallow } from 'enzyme'
import NotFoundPage from '../../components/NotFoundPage'
import expenses from '../fixtures/expenses'

test("render expense list item", () => {
  const wrapper = shallow(<NotFoundPage/>)
  expect(wrapper).toMatchSnapshot()
})
