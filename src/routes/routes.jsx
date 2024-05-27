import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import AddProduct from "../pages/dashboard/addProduct";
import ManageProducts from "../pages/dashboard/ManageProducts";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Register />,
      },
      //   {
      //     path: "/product/:productId",
      //     element: <ProductDetail></ProductDetail>,
      //   },

      //   {
      //     path: '/dashboard/update-profile',
      //     element: <PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>,
      //   },
      {
        path: "/dashboard/add-product",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/manage-products",
        element: <ManageProducts></ManageProducts>,
      },
    ],
  },
  //   {
  //     path: "/login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "/register",
  //     element: <Register />,
  //   },
]);
