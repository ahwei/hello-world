import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: '"Open Sans", "Helvetica", "Arial", sans-serif',
  },
  palette: {
    background: {
      default: 'rgba(18, 18, 18, 1)',
    },
    primary: {
      main: '#fff',
      contrastText: 'rgba(18, 18, 18, 1)',
    },
    secondary: {
      main: '#FF9B33',
      contrastText: 'rgba(18, 18, 18, 1)',
    },
    grey: {
      300: '#D9D9D9',
    },
    common: {
      black: '#181818',
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:focus': {
            outline: 'none',
            boxShadow: 'none',
          },
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.4)',
        },
      },
    },
  },
});

export default theme;
