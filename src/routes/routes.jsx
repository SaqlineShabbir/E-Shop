import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

import Main from "../pages/Main";
import ManageProducts from "../pages/dashboard/ManageProducts";
import UpdateProfile from "../pages/dashboard/UpdateProfile";
import AddProduct from "../pages/dashboard/addProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Main />,
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

      {
        path: "/dashboard/profile",
        element: <UpdateProfile></UpdateProfile>,
      },
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
