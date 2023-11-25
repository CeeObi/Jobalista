import React from 'react'
import { Outlet } from 'react-router-dom';


const SharedLayout = () => {
  return (<>
    <div>SharedLayout</div>
    <Outlet />
    </>
  )
}

export default SharedLayout;