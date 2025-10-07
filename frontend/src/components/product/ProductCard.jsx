import { Link } from 'react-router-dom'
import { Edit, Trash2, Package } from 'lucide-react'

export const ProductCard = ({ product, onDelete, user }) => {
  const isOwner = user && user._id === product.createdBy?._id

  return (
    <div className="card card-hover group">
      <div className="aspect-w-16 aspect-h-9 mb-4 overflow-hidden rounded-lg">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x200?text=No+Image'
          }}
        />
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
            {product.category}
          </span>
          <span className="text-sm text-gray-500">
            Stock: {product.stock}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-green-600">
            ${product.price}
          </span>
          <span className="text-sm text-gray-500">
            by {product.createdBy?.name}
          </span>
        </div>

        {isOwner && (
          <div className="flex space-x-2 pt-2 border-t border-gray-100">
            <Link
              to={`/edit-product/${product._id}`}
              className="flex-1 btn btn-secondary flex items-center justify-center space-x-2 hover:bg-gray-300 transition-colors duration-200"
            >
              <Edit className="w-4 h-4" />
              <span>Edit</span>
            </Link>
            <button
              onClick={() => onDelete(product._id)}
              className="flex-1 btn btn-danger flex items-center justify-center space-x-2 hover:bg-red-700 transition-colors duration-200"
            >
              <Trash2 className="w-4 h-4" />
              <span>Delete</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
