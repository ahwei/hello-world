import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import Search from '@/pages/Search';
import Tags from '@/pages/Tags';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: '/tags',
        element: <Tags />,
      },
      {
        path: '/search/:query',
        element: <Search />,
      },
    ],
  },
]);

export default router;
