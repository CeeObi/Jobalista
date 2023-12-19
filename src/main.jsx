import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { store } from './Store.js';
import { Provider } from 'react-redux';
import { ToastContainer} from 'react-toastify';









ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store} >
      <App tab="home"/>      
    </Provider>
    <ToastContainer position='top-center' autoClose={1500} className="capitalize"/> 
    
    
  </>,
)
