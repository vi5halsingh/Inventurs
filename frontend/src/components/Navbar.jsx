import { Link } from 'react-router-dom'

export default function Navbar({ auth }) {
  const { isAuthenticated, user, logout } = auth || {}
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link to="/" className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Manager</Link>
          <Link to="/products" className="nav-link">Products</Link>
        </div>
        <div>
          {isAuthenticated ? (
            <div className="flex items-center space-x-4">
              <span className="text-sm font-medium text-gray-700">{user?.name}</span>
              <button onClick={logout} className="nav-link text-red-600 hover:bg-red-50 hover:text-red-700">Logout</button>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/register" className="btn btn-primary">Register</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
