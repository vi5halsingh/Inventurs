import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'

export default function Products({ auth }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editProduct, setEditProduct] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    imageUrl: '',
    stock: ''
  })

  const categories = ['Electronics', 'Clothing', 'Books', 'Home & Garden', 'Sports', 'Other']

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    try {
      const token = localStorage.getItem('token')
      const res = await axios.get('http://localhost:5000/api/products', 
        token ? { headers: { Authorization: `Bearer ${token}` } } : {}
      )
      setProducts(res.data.products || [])
      setError(null)
    } catch (e) {
      console.error(e)
      setError('Failed to load products')
    }
    setLoading(false)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const token = localStorage.getItem('token')
      if (!token) {
        setError('Please login to perform this action')
        return
      }

      const config = {
        headers: { Authorization: `Bearer ${token}` }
      }

      if (isEditing) {
        await axios.put(`http://localhost:5000/api/products/${editProduct._id}`, formData, config)
      } else {
        await axios.post('http://localhost:5000/api/products', formData, config)
      }

      loadProducts()
      resetForm()
    } catch (e) {
      setError(e.response?.data?.message || 'Failed to save product')
    }
  }

  const handleDelete = async (productId) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return

    try {
      const token = localStorage.getItem('token')
      await axios.delete(`http://localhost:5000/api/products/${productId}`, {
        headers: { Authorization: `Bearer ${token}` }
      })
      loadProducts()
    } catch (e) {
      setError('Failed to delete product')
    }
  }

  const handleEdit = (product) => {
    setIsEditing(true)
    setEditProduct(product)
    setFormData({
      name: product.name,
      description: product.description,
      price: product.price,
      category: product.category,
      imageUrl: product.imageUrl,
      stock: product.stock
    })
  }

  const resetForm = () => {
    setFormData({
      name: '',
      description: '',
      price: '',
      category: '',
      imageUrl: '',
      stock: ''
    })
    setIsEditing(false)
    setEditProduct(null)
  }

  if (loading) return <div className="text-center">Loading...</div>
  if (error) return <div className="text-center text-red-600">{error}</div>

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      
      {auth?.user && (
        <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">{isEditing ? 'Edit Product' : 'Add New Product'}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Product Name"
              className="input"
              required
            />
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              placeholder="Price"
              className="input"
              required
              min="0"
            />
            <select
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="input"
              required
            >
              <option value="">Select Category</option>
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <input
              type="number"
              name="stock"
              value={formData.stock}
              onChange={handleInputChange}
              placeholder="Stock"
              className="input"
              required
              min="0"
            />
            <input
              type="url"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
              placeholder="Image URL"
              className="input"
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Description"
              className="input md:col-span-2"
              required
            />
          </div>
          <div className="mt-4 flex gap-2">
            <button type="submit" className="btn btn-primary">
              {isEditing ? 'Update Product' : 'Add Product'}
            </button>
            {isEditing && (
              <button type="button" onClick={resetForm} className="btn btn-secondary">
                Cancel
              </button>
            )}
          </div>
        </form>
      )}

      {products.length === 0 ? (
        <p className="text-center text-gray-600">No products available</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map(p => (
            <ProductCard
              key={p._id}
              product={p}
              user={auth?.user}
              onEdit={() => handleEdit(p)}
              onDelete={() => handleDelete(p._id)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
