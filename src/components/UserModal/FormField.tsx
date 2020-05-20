import React from 'react'
import { Typography } from '@material-ui/core'

export default function FormField(props: Props) {
  return (
    <Typography paragraph>
      <strong style={{ display: 'block' }}>{props.label}</strong>
      {props.isLink ? (
        <a href={`${props.value}`} target='_blank' rel='noopener noreferrer'>
          {props.value}
        </a>
      ) : (
        <span>{props.value}</span>
      )}
    </Typography>
  )
}

//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// INTERFACES ///////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
interface Props {
  label: string
  value: string | number
  isLink?: boolean
}
