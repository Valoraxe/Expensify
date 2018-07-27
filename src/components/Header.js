import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => (
  <header className="header">
    <div className="content-container">
      <div className="header_content">
        <Link className="header_title" to="/" exact={true}>
          <h1>Expensify</h1>
        </Link>
        <button className="button button-link">Logout</button>
      </div>
    </div>
  </header>
)

export default Header
