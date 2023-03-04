import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

import Preloader from '../components/Preloader/Preloader';

const Login = () => {

  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const email = e.target[0].value
    const password = e.target[1].value


    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
      setIsLoading(false)
    } catch (err) {
      setError(err.message)
      setIsLoading(false)
    }
  }

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>LOGO</span>
        <span className='title'>Login</span>
        <form onSubmit={handleSubmit}>
          <input type='email' placeholder='enter your email' />
          <input type='password' placeholder='enter your password' />
          {isLoading ? <Preloader /> : <button>Sign in</button>}
          {error && <span className='error'>{error}</span>}
        </form>
        <div>
          <p className='bottom'>You don't have account?
            <Link className='link' to='/register'>Register</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login