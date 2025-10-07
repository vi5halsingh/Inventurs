import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="page-container min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 md:p-12 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
            Welcome to Manager
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Your modern solution for seamless web experiences
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/products" 
              className="btn bg-white text-blue-600 hover:bg-blue-50"
            >
              Explore Products
            </Link>
            <Link 
              to="/register" 
              className="btn bg-blue-500 text-white hover:bg-blue-400"
            >
              Get Started
            </Link>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-2xl"></div>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="card hover:bg-blue-50 cursor-pointer">
          <div className="text-blue-600 text-4xl mb-4">🚀</div>
          <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
          <p className="text-gray-600">Experience blazing fast performance with our optimized frontend.</p>
        </div>
        <div className="card hover:bg-purple-50 cursor-pointer">
          <div className="text-purple-600 text-4xl mb-4">🎨</div>
          <h3 className="text-xl font-semibold mb-2">Beautiful Design</h3>
          <p className="text-gray-600">Modern and clean design that makes your content shine.</p>
        </div>
        <div className="card hover:bg-green-50 cursor-pointer">
          <div className="text-green-600 text-4xl mb-4">🛡️</div>
          <h3 className="text-xl font-semibold mb-2">Secure</h3>
          <p className="text-gray-600">Built with security in mind to protect your data.</p>
        </div>
      </div>

      {/* Interactive Demo Section */}
      <div 
        className="card overflow-hidden transition-all duration-500 mb-12"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="section-title">Try it Now</h2>
            <p className="text-lg text-gray-600 mb-6">
              Experience the power of manager with our interactive demo.
            </p>
            <Link 
              to="/products" 
              className={`btn btn-primary ${isHovered ? 'scale-105' : ''}`}
            >
              View Demo
            </Link>
          </div>
          <div className="flex-1">
            <div className="relative rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
              <img 
                src="https://via.placeholder.com/600x400" 
                alt="Demo" 
                className="w-full h-auto" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center py-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-xl text-blue-100 mb-8">Join thousands of satisfied users today.</p>
        <Link 
          to="/register" 
          className="btn bg-white text-blue-600 hover:bg-blue-50 hover:scale-105"
        >
          Create Account
        </Link>
      </div>
    </div>
  )
}
