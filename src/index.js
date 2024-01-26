import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from 'axios';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./Components/ErrorPage"
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    loader: async () => {
      let response = await axios.get(`${process.env.REACT_APP_BASE_URL}`)
    },
    errorElement:<ErrorPage/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

