import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLogout } from '../actions/authentication'

export const Header = ({ startLogout }) => (
  <header className="header">
    <div className="content-container">
      <div className="header_content">
        <Link className="header_title" to="/dashboard">
          <h1>Expensify</h1>
        </Link>
        <button onClick={startLogout} className="button button-link">Logout</button>
      </div>
    </div>
  </header>
)

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
})

export default connect(undefined, mapDispatchToProps)(Header)
