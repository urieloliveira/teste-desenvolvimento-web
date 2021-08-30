import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: 48,
      letterSpacing: -1.5,
    },
    h2: {
      fontSize: 32,
      letterSpacing: -0.5,
    },
    h3: {
      fontSize: 26,
      letterSpacing: 0,
    },
    h4: {
      fontSize: 22,
      letterSpacing: 0.25,
    },
    h5: {
      fontSize: 18,
      letterSpacing: 0,
    },
    subtitle1: {
      fontSize: 14,
      letterSpacing: 0.15,
    },
    body1: {
      fontSize: 18,
      letterSpacing: 0.5,
    },
    body2: {
      fontSize: 16,
      letterSpacing: 0.25,
    },
    button: {
      fontSize: 14,
      letterSpacing: 0.25,
      textTransform: 'none',
    },
    caption: {
      fontSize: 12,
      letterSpacing: 0.4,
    },
    overline: {
      fontSize: 10,
      letterSpacing: 1.5,
    },
  },
  palette: {
    primary: {
      main: '#008489',
    },
    secondary: {
      main: '#ff385c',
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: '#222',
      secondary: '#717171',
    },
    divider: '#DDDDDD',
  },
});

export default theme;
