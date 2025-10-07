export default function ProductCard({ product, user, onEdit, onDelete }) {
  const isOwner = user && product.createdBy && user._id === product.createdBy._id

  return (
    <div className="card group">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={product.imageUrl || 'https://via.placeholder.com/300x200'} 
          alt={product.name} 
          className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110" 
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
      <p className="mt-2 text-gray-600">{product.description}</p>
      <div className="mt-2 text-sm text-gray-500">
        <span className="mr-4">Category: {product.category}</span>
        <span>Stock: {product.stock}</span>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-2xl font-bold text-green-600">${product.price}</span>
        <div className="flex gap-2">
          {isOwner && (
            <>
              <button 
                onClick={onEdit}
                className="btn btn-secondary btn-sm"
              >
                Edit
              </button>
              <button 
                onClick={onDelete}
                className="btn btn-danger btn-sm"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
