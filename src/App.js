import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomePage from './pages/Home'
import SignupPage from './pages/Signup'
import DashboardPage from './pages/Dashboard'

export default function App() {
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