import { Navigate } from 'react-router-dom'
import { LoadingSpinner } from '../components/ui/LoadingSpinner'

export const ProtectedRoute = ({ children, auth }) => {
  const { isAuthenticated, loading } = auth || { isAuthenticated: false, loading: false }

  if (loading) {
    return <LoadingSpinner />
  }

  return isAuthenticated ? children : <Navigate to="/login" />
}
