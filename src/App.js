import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import { AuthContext } from './contexts/Auth'
import HomePage from './pages/Home'
import SignupPage from './pages/Signup'
import DashboardPage from './pages/Dashboard'

export default function App() {
  const [currentUser] = useContext(AuthContext)
  console.log(currentUser)
  
  return (
    <>
      <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route exact path={'/signup'} component={SignupPage} />
        <Route exact path={'/dashboard'} component={DashboardPage} />
      </Switch>
    </>
  )
}