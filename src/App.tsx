// EXTERNAL DEPENDENCIES
import React from 'react'
import { Router, Switch } from 'react-router-dom'
// INTERNAL DEPENDENCIES
import { scrollToTheTop } from './utils/theme'
import history from './router/history'
import MyRoutes from './router/'
import Header from './components/Header'

export default function App() {
  React.useEffect(() => {
    history.listen(() => scrollToTheTop())
  }, [])

  return (
    <Router history={history}>
      <Header />
      <Switch>
        <MyRoutes />
      </Switch>
    </Router>
  )
}
