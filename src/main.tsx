import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  RouterProvider,
  Route,
} from "react-router-dom";
import RouterApp from './routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App>
      <RouterProvider router={RouterApp} />
    </App>
  </React.StrictMode>
)
