import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'
import { AuthContext } from './contexts/Auth'
import HomePage from './pages/Home'
import SignupPage from './pages/Signup'
import DashboardPage from './pages/Dashboard'

export default function App() {
  const [currentUser] = useContext(AuthContext)

  return (
    <>
      <Switch>
        <Route exact path={'/'} component={HomePage} />
        <Route path={'/signup'} component={SignupPage} />
        {/* <Route path={'/dashboard'} component={DashboardPage} /> */}
        {currentUser ? <Route path={'/dashboard'} component={DashboardPage} /> : <Route path={'/'} component={HomePage} />}
      </Switch>
    </>
  )
}