import './App.css'
import { Outlet } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import 'quill/dist/quill.snow.css'

function App() {

  return (
    <>
      <Navbar />
        <Outlet />
      <Footer />
    </>
  )
}

export default App