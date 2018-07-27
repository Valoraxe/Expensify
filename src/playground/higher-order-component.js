//Higher Order Component (HOC) -< A component that renders another Component
//Re-use Code, Render Hijacking, Prop Manipulation, Abstract State

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p>Info is: {props.info}</p>
  </div>
)


const adminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info!</p>}
      <WrappedComponent {...props}/>
    </div>
  )
}

//Higher Order Component
const authenticate = (WrappedComponent) => {
  return (props) => (
    <div>
      <h1>{props.loggedIn ? "You logged in!" : "Please log in!"}</h1>
      {props.loggedIn && <WrappedComponent {...props}/>}
    </div>
  )
}

const AdminInfo = adminWarning(Info)

const AuthInfo = authenticate(Info)

const appRoot = document.getElementById("myApp");

ReactDOM.render(<AuthInfo loggedIn={false} info="Yo!"/>, appRoot)
