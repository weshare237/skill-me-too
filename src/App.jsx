import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Contact from './pages/Contact'
import ForgotPassword from './pages/ForgotPassword'
import About from './pages/About'
import Donate from './pages/Donate'
import BlogPage from './pages/BlogPage'
import BlogDetails from './components/BlogDetails'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='contact-us' element={<Contact />} />
        <Route path='forgot-password' element={<ForgotPassword />} />
        <Route path='about-us' element={<About />} />
        <Route path='donate' element={<Donate />} />
        <Route path='blog' element={<BlogPage />} />
        <Route path='blog-details' element={<BlogDetails />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
