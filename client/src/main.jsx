import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'

import Home from './pages/Home'
import Blog from './pages/Blog'
import App from './App.jsx'

import Layout from './pages/admin/Layout.jsx'
import Dashboard from './pages/admin/Dashboard.jsx'
import AddBlog from './pages/admin/AddBlog.jsx'
import ListBlog from './pages/admin/ListBlog.jsx'
import Comment from './pages/admin/Comment.jsx'
import Login from './components/admin/Login.jsx'

import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Public Website Layout  */}
      <Route path='/' element={<App/>}>
        <Route path='/' element={<Home />} />
        <Route path='/blog/:id' element={<Blog />} />
      </Route>

        {/* Admin Panel Layout */}
        <Route path='/admin' element={true ? <Layout /> : <Login />}>
          <Route index element = {<Dashboard />}/>
          <Route path='addBlog' element = {<AddBlog />}/>
          <Route path='listBlog' element = {<ListBlog />}/>
          <Route path='comments' element = {<Comment />}/>
        </Route>
      </>
      
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
