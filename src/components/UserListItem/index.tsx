import React from 'react'
import { ListItem, ListItemText, ListItemAvatar, Avatar, Typography } from '@material-ui/core'
import { UserPreview } from '../../utils/interfaces'

export default function UserListItem(props: Props) {
  return (
    <ListItem alignItems='flex-start'>
      <ListItemAvatar>
        <Avatar src='/static/images/avatar/1.jpg' />
      </ListItemAvatar>
      <ListItemText
        primary='Brunch this weekend?'
        secondary={
          <React.Fragment>
            <Typography component='span' variant='body2' color='textPrimary'>
              Ali Connors
            </Typography>
            {" — I'll be in your neighborhood doing errands this…"}
          </React.Fragment>
        }
      />
    </ListItem>
  )
}

//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// INTERFACES ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
interface Props {
  // user: UserPreview
}
