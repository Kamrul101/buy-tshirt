import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import MainLayout from './Component/Layout/MainLayout';
import OrderReview from './Component/OrderReview/OrderReview';
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout> ,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('tshirt.json')
      },
      {
        path: '/orderReview',
        element: <OrderReview></OrderReview>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
