import { useState } from 'react';
import {Dashboard, Error, Landing, Login, Register} from './Pages';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './Store';



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
    <Provider store={store} >
      <RouterProvider router={router} />
    </Provider>
  )
}


export default App;
