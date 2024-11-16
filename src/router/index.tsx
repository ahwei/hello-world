import Home from '@/pages/Home';
import Search from '@/pages/Search';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    index: true,
  },
  {
    path: '/search/:query',
    element: <Search />,
  },
]);

export default router;
