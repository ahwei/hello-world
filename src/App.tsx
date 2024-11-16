import router from '@/router';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider
        router={router}
        future={{
          v7_startTransition: true,
        }}
      />
    </ThemeProvider>
  );
}

export default App;
