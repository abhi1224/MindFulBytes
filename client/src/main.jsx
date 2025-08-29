import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

import Home from './pages/Home'
import Blog from './pages/Blog'
import App from './App.jsx'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='/' element={<Home />} />
      <Route path='/blog/:id' element={<Blog />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
