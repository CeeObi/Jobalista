import { useState } from 'react';
import {Error, Landing, Login, ProtectedRoute, Register} from './Pages';
// import { BrowserRouter,Route,Routes} from "react-router-dom";
import { AddJob, AllJobs, Profile, SharedLayout, Stats } from './Pages/Dashboard';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import { SmallSideBar } from './components';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
          <Route path="/landing" element={<Landing/>}/>
          <Route path="/sml" element={<SmallSideBar/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>} errorElement={<Error />}/>    
          <Route path="/" element={ <ProtectedRoute>   <SharedLayout/>  </ProtectedRoute>  }>
                <Route index element={<Stats />}/>                        
                <Route path="add-job"  element={<AddJob />}/>                        
                <Route path="all-jobs"  element={<AllJobs />}/>                        
                <Route path="profile"  element={<Profile />}/>                        
          </Route>          
          <Route path="*"  element={<Error />}/>                        
    </Route>        
      
  )
);

function App() {
  return (
    <RouterProvider router={router} />
    
  )
}



export default App;
