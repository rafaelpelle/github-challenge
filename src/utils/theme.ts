import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

////////////////////// SIZES ////////////////////////
export const pageHeaderHeight = '65px'
///////////////////// PALETTE ///////////////////////
export const darkBlue = '#00012d'
export const green = '#22c993'
export const darkGreen = '#1b5e20'
export const white = '#FFFFFF'
export const dateFormat = 'dd-MM-yyyy'

export default createMuiTheme({
  palette: {
    primary: {
      main: darkBlue,
      contrastText: white,
    },
    secondary: {
      main: white,
      contrastText: darkBlue,
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      '"Helvetica Neue"',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  overrides: {
    MuiAppBar: {
      positionSticky: {
        // The MuiDrawer has zIndex 1200.
        zIndex: 1201,
      },
    },
    MuiTableCell: {
      head: {
        fontWeight: 700,
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: 'rgba(0,0,0,0.9)',
      },
    },
    MuiCircularProgress: {
      root: {
        display: 'block',
      },
    },
    MuiSnackbarContent: {
      message: {
        fontWeight: 'bold',
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: '0.85em',
        padding: '1em',
      },
    },
  },
})
