import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'
import Directory from './Direc.jsx'
import Profile from './Profile.jsx'

const router = createBrowserRouter([

  {
    path: '/',
    element: <App />
  },
  {
    path: 'Direc',
    element: <Directory />
  },
  {
    path: 'Profile',
    element: <Profile />
  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
