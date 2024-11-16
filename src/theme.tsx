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
  },
});

export default theme;
