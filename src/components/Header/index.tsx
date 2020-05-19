// EXTERNAL DEPENDENCIES
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
// INTERNAL DEPENDENCIES
import { pageHeaderHeight } from '../../utils/theme'
import './styles.css'
const logo = require('./logo.svg')

export default function PageHeader(props: Props) {
  return (
    <AppBar position='sticky' color='inherit' style={appBarStyle}>
      <Toolbar style={toolbarStyle}>
        <img src={logo} className='header-logo' alt='logo' />
      </Toolbar>
    </AppBar>
  )
}

/////////////////////////////////////////////////////////////////
/////////////////////////// INTERFACES //////////////////////////
/////////////////////////////////////////////////////////////////
interface Props {}

/////////////////////////////////////////////////////////////////
///////////////////////////// STYLES ////////////////////////////
/////////////////////////////////////////////////////////////////
const appBarStyle = {
  padding: '0 10px',
  height: pageHeaderHeight,
  boxShadow: '0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12)',
}
const toolbarStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  padding: 0,
}
