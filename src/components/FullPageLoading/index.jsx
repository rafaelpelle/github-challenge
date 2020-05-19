import React from 'react'
import { Typography, CircularProgress } from '@material-ui/core'
import './style.css'

export default function PageLoader() {
  return (
    <div className='loader-container'>
      <CircularProgress size={50} thickness={5} color='primary' />
      <Typography variant='button' color='primary' align='center' style={{ marginTop: '15px' }}>
        Carregando...
      </Typography>
    </div>
  )
}
