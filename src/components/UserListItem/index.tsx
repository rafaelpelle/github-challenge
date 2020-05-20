import React, { Fragment } from 'react'
import { ListItem, ListItemText, ListItemAvatar, Avatar, Typography, Divider } from '@material-ui/core'
import { UserPreview } from '../../utils/interfaces'

export default function UserListItem(props: Props) {
  const { user, handleClick } = props
  const { id, login, avatar_url } = user
  return (
    <Fragment>
      <ListItem style={{ cursor: 'pointer' }} alignItems='flex-start' onClick={() => handleClick(user)}>
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
  handleClick: (user: UserPreview) => Promise<void>
}
