import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./Components/ErrorPage"
import ProductList from "./Components/ProductList"
import { Product } from './types';
import ProductDetailsPage from './Components/ProductDetailsPage';
import Navbar from './Components/Navbar';
import Main from './Components/Main';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path: "",
        element: <Main/>,
      },
      {
        path: "products",
        element: <ProductList/>,
        loader: async () => {
          let response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/products`)
          return response.data
        },
        errorElement: <ErrorPage/>,
      },
      {
        path: "products/:productId",
        element: <ProductDetailsPage />,
        loader: async ({ params }) => {
          let response = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/products/${params.productId}/`)
          console.log(response.data)
          return response.data
        },
        errorElement: <ErrorPage/>,
      },
    ]
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

