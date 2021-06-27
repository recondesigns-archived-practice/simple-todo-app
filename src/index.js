import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './contexts/Auth'
import './index.css'
import App from './App'

function Index() {
  return (
    <Router>
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  )
}


ReactDOM.render(
    <Index />, document.getElementById('root')
)