import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAuth } from '../contexts/AuthContext'
import { api } from '../services/api'
import { ProductCard } from '../components/product/ProductCard'
import { ProductFilters } from '../components/product/ProductFilters'
import { Pagination } from '../components/product/Pagination'
import { LoadingSpinner } from '../components/ui/LoadingSpinner'
import { Plus, Package } from 'lucide-react'

export const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [pagination, setPagination] = useState({})
  const [filters, setFilters] = useState({
    search: '',
    category: '',
    sortBy: 'createdAt',
    sortOrder: 'desc',
    page: 1,
    limit: 9
  })

  const { user } = useAuth()

  useEffect(() => {
    fetchProducts()
  }, [filters])

  const fetchProducts = async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      Object.keys(filters).forEach(key => {
        if (filters[key]) {
          params.append(key, filters[key])
        }
      })

      const response = await api.get(`/products?${params}`)
      setProducts(response.data.products)
      setPagination(response.data.pagination)
    } catch (error) {
      toast.error('Failed to fetch products')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value,
      page: 1
    }))
  }

  const handlePageChange = (newPage) => {
    setFilters(prev => ({
      ...prev,
      page: newPage
    }))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleDeleteProduct = async (productId) => {
    if (!window.confirm('Are you sure you want to delete this product?')) {
      return
    }

    try {
      await api.delete(`/products/${productId}`)
      toast.success('Product deleted successfully')
      fetchProducts()
    } catch (error) {
      toast.error('Failed to delete product')
      console.error(error)
    }
  }

  if (loading) {
    return <LoadingSpinner />
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Products</h1>
            <p className="mt-2 text-gray-600">
              Manage and browse your product catalog
            </p>
          </div>
          {user && (
            <Link 
              to="/add-product" 
              className="btn btn-primary flex items-center space-x-2 hover:scale-105 transform transition-all duration-200 mt-4 sm:mt-0"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Product</span>
            </Link>
          )}
        </div>

        <ProductFilters filters={filters} onFilterChange={handleFilterChange} />

        {products.length === 0 ? (
          <div className="text-center py-12">
            <div className="p-4 bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4">
              <Package className="w-8 h-8 text-gray-400 mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
            {user && (
              <Link 
                to="/add-product" 
                className="btn btn-primary hover:scale-105 transform transition-all duration-200"
              >
                Add Your First Product
              </Link>
            )}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map(product => (
                <ProductCard 
                  key={product._id} 
                  product={product} 
                  onDelete={handleDeleteProduct}
                />
              ))}
            </div>
            
            <Pagination pagination={pagination} onPageChange={handlePageChange} />
            
            {pagination.totalProducts && (
              <div className="text-center mt-6 text-gray-600">
                Showing {((pagination.currentPage - 1) * filters.limit) + 1} to {Math.min(pagination.currentPage * filters.limit, pagination.totalProducts)} of {pagination.totalProducts} products
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

