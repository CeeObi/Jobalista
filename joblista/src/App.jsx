import { useState } from 'react';
import {Dashboard, Error, Landing, Login, Register} from './Pages';
import {RouterProvider, createBrowserRouter} from "react-router-dom";


const router = new createBrowserRouter([
  {
    path:"/",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path:"/register",
    element: <Register />,
    errorElement: <Error />,
  },
  {
    path:"/dashboard",
    element: <Dashboard />,
    errorElement: <Error />,
  },
  {
    path:"/login",
    element: <Login />,
    errorElement: <Error />,
  },
])



function App() {
  return (
    <RouterProvider router={router} />
  )
}


export default App;
