import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '../../components/Header'

test("Should render correct", () => {
  const wrapper = shallow(<Header startLogout={() => { }}/>)
  expect(wrapper).toMatchSnapshot()
  //expect(wrapper.find("h1").length).toBe(1)

  // const renderer = new ReactShallowRenderer();
  // renderer.render(<Header/>)
  // expect(renderer.getRenderOutput()).toMatchSnapshot()
})

test("should call logout on click", () => {
  const startLogout = jest.fn()
  const wrapper = shallow(<Header startLogout={startLogout} />)
  wrapper.find("button").simulate("click")
  expect(startLogout).toHaveBeenCalled()
})
