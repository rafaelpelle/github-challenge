// EXTERNAL DEPENDENCIES
import React from 'react'
import { Router, Switch } from 'react-router-dom'
// INTERNAL DEPENDENCIES
import MyRoutes from './router/'
import history from './router/history'
import Header from './components/Header'

export default function App() {
  React.useEffect(() => {
    history.listen(() => scrollToTheTop())
  }, [])

  const scrollToTheTop = () => {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }

  return (
    <Router history={history}>
      <Header />
      <Switch>
        <MyRoutes />
      </Switch>
    </Router>
  )
}
