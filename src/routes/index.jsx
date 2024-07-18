import {Outlet, useRoutes} from 'react-router-dom';
import MainLayout from '../components/layout-components/MainLayout';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';

const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: (
        <MainLayout>
          <Outlet />
        </MainLayout>
      ),
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'product/:id',
          element: <ProductDetails />,
        },
      ],
    },
  ]);
};

export default Router;
