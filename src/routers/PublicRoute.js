import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

export const PublicRoute = ({
  isLoggedIn,
  component: Component,
  ...rest //destrucutres all other props not already destructured
}) => (
  <Route {...rest} component={(props) => (
    !isLoggedIn ? (
      <Component {...props}/>
    ) : (
      <Redirect to="/dashboard"/>
    )
  )}/>
)

const mapStateToProps = (state) => ({
  isLoggedIn: !!state.authentication.uid
})

export default connect(mapStateToProps)(PublicRoute)
