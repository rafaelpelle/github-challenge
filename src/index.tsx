// EXTERNAL DEPENDENCIES
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { SnackbarProvider } from 'notistack'
import { MuiThemeProvider } from '@material-ui/core/styles'
// INTERNAL DEPENDENCIES
import appTheme from './utils/theme'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={appTheme}>
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <App />
      </SnackbarProvider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
