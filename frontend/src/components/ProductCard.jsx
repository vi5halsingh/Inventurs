export default function ProductCard({ product }) {
  return (
    <div className="card group">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={product.imageUrl || 'https://via.placeholder.com/300x200'} 
          alt="" 
          className="w-full h-48 object-cover transform transition-transform duration-300 group-hover:scale-110" 
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
      <p className="mt-2 text-gray-600">{product.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-2xl font-bold text-green-600">${product.price}</span>
        <button className="btn btn-primary">View Details</button>
      </div>
    </div>
  )
}
