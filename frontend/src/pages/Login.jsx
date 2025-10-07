import { useState } from 'react'

export default function Login({ auth }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handle = async (e) => {
    e.preventDefault()
    try {
      const res = await auth.login(email, password)
      if(res.success) window.location.href='/'
    } catch(e) { console.error(e) }
  }

  return (
    <div className="page-container max-w-md mx-auto">
      <div className="card">
        <h2 className="section-title">Welcome Back</h2>
        <form onSubmit={handle} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              className="input" 
              type="email" 
              placeholder="Enter your email" 
              value={email} 
              onChange={e => setEmail(e.target.value)} 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              className="input" 
              type="password" 
              placeholder="Enter your password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
            />
          </div>
          <button className="btn btn-primary w-full">Sign in</button>
        </form>
      </div>
    </div>
  )
}
