import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Package } from 'lucide-react'

export const NotFound = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="p-4 bg-red-100 rounded-full w-24 h-24 mx-auto mb-6">
            <Package className="w-16 h-16 text-red-600 mx-auto" />
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. 
            It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link 
            to="/" 
            className="btn btn-primary flex items-center justify-center space-x-2 hover:scale-105 transform transition-all duration-200"
          >
            <Home className="w-4 h-4" />
            <span>Go Home</span>
          </Link>
          
          <button 
            onClick={() => window.history.back()}
            className="btn btn-secondary flex items-center justify-center space-x-2 hover:scale-105 transform transition-all duration-200 w-full"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Go Back</span>
          </button>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          <p>Need help? Contact our support team.</p>
        </div>
      </div>
    </div>
  )
}

