import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import './style.scss'

const App = () => {

  const { currentUser } = useContext(AuthContext)

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/login' />
    }

    return children
  }

  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/'>
            <Route index element={<ProtectedRoute>
              <Home />
            </ProtectedRoute>} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
