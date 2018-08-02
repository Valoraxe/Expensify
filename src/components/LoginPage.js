import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/authentication'

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout_box">
      <h1 className="box-layout_title">Expensify</h1>
      <p>How much did you spend this month?</p>
      <button onClick={startLogin} className="button">Login with Google</button>
    </div>
  </div>
)

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
})

export default connect(undefined, mapDispatchToProps)(LoginPage)
