// EXTERNAL DEPENDENCIES
import React from 'react'
import { Route } from 'react-router'
// INTERNAL DEPENDENCIES
import UserListPage from '../pages/UserListPage'

export default function MyRoutes() {
  return (
    <div>
      <Route exact path='/' render={() => <UserListPage />} />
    </div>
  )
}
