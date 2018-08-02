import { login, logout } from '../../actions/authentication'

test("should do login action", () => {
  const uid = "testString"
  const action = login(uid)
  expect(action).toEqual({
    type: "LOGIN",
    uid
  })
})

test("should do logout action", () => {
  const action = logout()
  expect(action).toEqual({
    type: "LOGOUT",
  })
})
