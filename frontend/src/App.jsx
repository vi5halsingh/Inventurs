import { useState, useEffect } from 'react'
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Home from './pages/Home'
import Products from './pages/Products'
import Login from './pages/Login'
import Register from './pages/Register'
import Navbar from './components/Navbar'

export default function App() {
  const [auth, setAuth] = useState({
    user: null,
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true
  })
  const navigate = useNavigate()

  useEffect(() => {
    const load = async () => {
      const token = localStorage.getItem('token')
      if (token) {
        try {
          const res = await axios.get('http://localhost:5000/api/auth/me', {
            headers: { Authorization: `Bearer ${token}` }
          })
          setAuth({ user: res.data, token, isAuthenticated: true, loading: false })
        } catch (e) {
          localStorage.removeItem('token')
          setAuth({ user: null, token: null, isAuthenticated: false, loading: false })
        }
      } else {
        setAuth({ user: null, token: null, isAuthenticated: false, loading: false })
      }
    }
    load()
  }, [])

  const login = async (email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', { email, password })
      if (res.data?.token) {
        localStorage.setItem('token', res.data.token)
        setAuth({ user: res.data.user, token: res.data.token, isAuthenticated: true, loading: false })
        return { success: true }
      }
      return { success: false }
    } catch (e) {
      console.error(e)
      return { success: false, error: e.response?.data?.message || 'Login failed' }
    }
  }

  const register = async (name, email, password) => {
    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', { name, email, password })
      if (res.data?.token) {
        localStorage.setItem('token', res.data.token)
        setAuth({ user: res.data.user, token: res.data.token, isAuthenticated: true, loading: false })
        return { success: true }
      }
      return { success: false }
    } catch (e) {
      console.error(e)
      return { success: false, error: e.response?.data?.message || 'Registration failed' }
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setAuth({ user: null, token: null, isAuthenticated: false, loading: false })
    navigate('/')
  }

  const authData = { ...auth, login, register, logout }

  if (auth.loading) return <div>Loading...</div>

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar auth={authData} />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products auth={authData} />} />
          <Route path="/login" element={<Login auth={authData} />} />
          <Route path="/register" element={<Register auth={authData} />} />
        </Routes>
      </main>
    </div>
  )
}
