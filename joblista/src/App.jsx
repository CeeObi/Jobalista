import { useState } from 'react';
import {Dashboard, Error, Landing, Register} from './Pages';
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
    element: <Error />,//<Dashboard />,
    errorElement: <Error />,
  },
])



function App() {
  return (
    <RouterProvider router={router} />
  )
}


export default App;
