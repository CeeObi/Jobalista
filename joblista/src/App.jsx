import { useState } from 'react';
import {Error, Landing, Login, Register} from './Pages';
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './Store';
import { AddJob, AllJobs, Profile, SharedLayout, Stats } from './Pages/Dashboard';




const router = new createBrowserRouter([
  {
    path:"/",
    element: <SharedLayout />,
    errorElement: <Error />,
    children:[
      {
        index:true,
        // path:"/stats",
        element: <Stats />,
        errorElement: <Error />,
      },
      {
        index:true,
        path:"/add-job",
        element: <AddJob />,
        errorElement: <Error />,
      },
      {
        path:"/all-jobs",
        element: <AllJobs />,
        errorElement: <Error />,
      },
      {
        path:"/profile",
        element: <Profile />,
        errorElement: <Error />,
      }
    ]
  },  
  {
    path:"/landing",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path:"/register",
    element: <Register />,
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
