import Layout from '@/components/Layout';
import HomePageLayout from '@/components/Layout/HomePageLayout';
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
        element: <HomePageLayout />,
        children: [
          {
            element: <Home />,
            index: true,
          },
          {
            path: '/search',
            element: <Search />,
          },
        ],
      },

      {
        path: '/tags',
        element: <Tags />,
      },
    ],
  },
]);

export default router;
