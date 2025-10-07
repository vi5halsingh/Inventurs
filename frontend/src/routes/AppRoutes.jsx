import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { ProtectedRoute } from './ProtectedRoute'
import { LoadingSpinner } from '../components/ui/LoadingSpinner'

const Home = lazy(() => import('../pages/Home').then(module => ({ default: module.Home })))
const Login = lazy(() => import('../pages/Login').then(module => ({ default: module.Login })))
const Register = lazy(() => import('../pages/Register').then(module => ({ default: module.Register })))
const Products = lazy(() => import('../pages/Products').then(module => ({ default: module.Products })))
const AddProduct = lazy(() => import('../pages/AddProduct').then(module => ({ default: module.AddProduct })))
const EditProduct = lazy(() => import('../pages/EditProduct').then(module => ({ default: module.EditProduct })))
const NotFound = lazy(() => import('../pages/NotFound').then(module => ({ default: module.NotFound })))

export const AppRoutes = ({ auth }) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Home auth={auth} />} />
        <Route path="/login" element={<Login auth={auth} />} />
        <Route path="/register" element={<Register auth={auth} />} />
        <Route path="/products" element={<Products auth={auth} />} />
        <Route
          path="/add-product"
          element={
            <ProtectedRoute auth={auth}>
              <AddProduct auth={auth} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit-product/:id"
          element={
            <ProtectedRoute auth={auth}>
              <EditProduct auth={auth} />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}
