import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'

function Index() {
  return (
    <Router>
      <App />
    </Router>
  )
}


ReactDOM.render(
    <Index />, document.getElementById('root')
)