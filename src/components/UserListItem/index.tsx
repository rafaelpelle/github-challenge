import React, { Fragment } from 'react'
import { ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Divider } from '@material-ui/core'
import { UserPreview } from '../../utils/interfaces'

export default function UserListItem(props: Props) {
  const { id, login, avatar_url } = props.user
  return (
    <Fragment>
      <ListItem style={{ cursor: 'pointer' }} alignItems='flex-start'>
        <ListItemAvatar>
          <Avatar src={avatar_url} />
        </ListItemAvatar>
        <ListItemText
          primary={<Typography variant='subtitle2'>{login}</Typography>}
          secondary={<Typography variant='caption'>ID: {id}</Typography>}
        />
      </ListItem>
      <Divider />
    </Fragment>
  )
}

//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// INTERFACES ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
interface Props {
  user: UserPreview
}
