import {Outlet, useRoutes} from 'react-router-dom';
import MainLayout from '../components/layout-components/MainLayout';
import Home from '../pages/Home';
import ProductDetails from '../pages/ProductDetails';
import Categoria from '../pages/Categoria';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';

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
        {
          path: 'categorie/:id',
          element: <Categoria />,
        },
        {
          path: '/cart',
          element: <Cart />,
        },
      ],
    },
    {
      path: '/checkout',
      element: <Checkout />,
    },
  ]);
};

export default Router;
