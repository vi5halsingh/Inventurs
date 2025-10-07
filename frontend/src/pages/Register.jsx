import { useState } from 'react'

export default function Register({ auth }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handle = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    // Basic validation
    if (!name || !email || !password) {
      setError('All fields are required')
      setLoading(false)
      return
    }

    if (name.length < 2) {
      setError('Name must be at least 2 characters')
      setLoading(false)
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      setLoading(false)
      return
    }

    try {
      const res = await auth.register(name, email, password)
      if (res.success) {
        window.location.href = '/'
      } else if (res.error) {
        setError(res.error)
      }
    } catch (e) {
      setError(e.response?.data?.message || 'Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="page-container max-w-md mx-auto">
      <div className="card">
        <h2 className="section-title">Create Account</h2>
        {error && (
          <div className="p-3 mb-4 text-sm text-red-500 bg-red-50 rounded-lg">
            {error}
          </div>
        )}
        <form onSubmit={handle} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              className="input"
              placeholder="Enter your full name"
              value={name}
              onChange={e => setName(e.target.value)}
              disabled={loading}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              className="input"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              disabled={loading}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              className="input"
              type="password"
              placeholder="Choose a password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              disabled={loading}
            />
          </div>
          <button 
            className="btn btn-primary w-full" 
            disabled={loading}
          >
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>
      </div>
    </div>
  )
}
