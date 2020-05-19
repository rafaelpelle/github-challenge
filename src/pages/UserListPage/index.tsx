// EXTERNAL DEPENDENCIES
import React from 'react'
import { List } from '@material-ui/core'
// INTERNAL DEPENDENCIES
import UserListItem from '../../components/UserListItem'

export default function UserListPage(props: Props) {
  return (
    <div>
      <List>
        <UserListItem />
        <UserListItem />
        <UserListItem />
      </List>
    </div>
  )
}

//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// INTERFACES ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
interface Props {}
