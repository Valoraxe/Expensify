import authReducer from '../../reducers/authentication'

test("uid set on login", () => {
  const action = {
    type: "LOGIN",
    uid: "testString"
  }
  const state = authReducer({}, action)
  expect(state.uid).toBe(action.uid)
})

test("clear uid on logout", () => {
  const action = {
    type: "LOGOUT"
  }
  const state = authReducer({uid: "testString"}, action)
  expect(state).toEqual({})
})
