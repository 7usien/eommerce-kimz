import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import Layout from './components/pages/Layout';
import Home from './components/pages/Home';
import Errorpage from './components/pages/Errorpage';
import Categories from './components/pages/Categories';
import Items from './components/pages/Items';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import NewCollections from './components/pages/NewCollections';
import { Provider } from 'react-redux';
import store from './state/index';
import Item from './components/ecom-ui/Item/Item';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Errorpage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'categories', element: <Categories /> },
      {
        path: 'categories/:prefix/items',
        loader: ({ params }) => {
          if (!isNaN(params.prefix)) {
            throw new Response('Bad request', {
              statusText: 'Record not found',
              status: 400,
            });
          }
          return null;
        },
        element: <Items />,
      },
      { path: 'login', element: <Login /> },
      { path: 'register', element: <Register /> },
      { path: 'new-collections', element: <NewCollections /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);
