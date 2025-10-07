import { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'

export default function Products({ auth }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const load = async () => {
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
    load()
  }, [])

  if (loading) return <div className="text-center">Loading...</div>
  if (error) return <div className="text-center text-red-600">{error}</div>

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Products</h2>
      {products.length === 0 ? (
        <p className="text-center text-gray-600">No products available</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products.map(p => <ProductCard key={p._id} product={p} user={auth?.user} />)}
        </div>
      )}
    </div>
  )
}
