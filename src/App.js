import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'
import './style.scss'

const App = () => {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
