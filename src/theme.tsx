import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: '#fff',
      contrastText: '#000',
    },
    secondary: {
      main: '#FF9B33',
      contrastText: '#000',
    },
    grey: {
      300: '#D9D9D9',
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
  },
});

export default theme;
