import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Package, Search, Filter, Plus } from 'lucide-react'

export const Home = () => {
  const { isAuthenticated, user } = useAuth()

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-primary-100 rounded-full">
              <Package className="w-16 h-16 text-primary-600" />
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to{' '}
            <span className="text-primary-600">Product Manager</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Manage your products with ease using our simple and intuitive platform. 
            Create, organize, and track your inventory with powerful search and filtering capabilities.
          </p>
          
          {isAuthenticated ? (
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-800">
                Hello, {user?.name}! 👋
              </h2>
              <p className="text-gray-600 mb-8">
                Ready to manage your products?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/products" 
                  className="btn btn-primary text-lg px-8 py-3 hover:scale-105 transform transition-all duration-200"
                >
                  View Products
                </Link>
                <Link 
                  to="/add-product" 
                  className="btn btn-success text-lg px-8 py-3 hover:scale-105 transform transition-all duration-200"
                >
                  Add New Product
                </Link>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-600 mb-8">
                Please sign in or register to start managing your products
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/login" 
                  className="btn btn-primary text-lg px-8 py-3 hover:scale-105 transform transition-all duration-200"
                >
                  Sign In
                </Link>
                <Link 
                  to="/register" 
                  className="btn btn-secondary text-lg px-8 py-3 hover:scale-105 transform transition-all duration-200"
                >
                  Register
                </Link>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="card card-hover text-center group">
            <div className="p-4 bg-primary-100 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-primary-200 transition-colors duration-200">
              <Package className="w-8 h-8 text-primary-600 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Product Management</h3>
            <p className="text-gray-600">Create, read, update, and delete products with our intuitive interface.</p>
          </div>
          
          <div className="card card-hover text-center group">
            <div className="p-4 bg-green-100 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-200">
              <Search className="w-8 h-8 text-green-600 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Search & Filter</h3>
            <p className="text-gray-600">Find products quickly with our powerful search and filtering capabilities.</p>
          </div>
          
          <div className="card card-hover text-center group">
            <div className="p-4 bg-purple-100 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-200">
              <Filter className="w-8 h-8 text-purple-600 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Pagination</h3>
            <p className="text-gray-600">Browse through large product catalogs with efficient pagination.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

