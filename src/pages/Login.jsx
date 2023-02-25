import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

const Login = () => {

  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value


    try {
      await signInWithEmailAndPassword(auth, email, password)
      navigate('/')
    } catch (err) {
      setError(true)
      console.log(err)
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
          <button>Sign in</button>
          {error && <span>Something went wrong</span>}
        </form>
        <div>
          <span className='bottom'>You don't have account?</span>
          <Link className='link' to='/register'>Register</Link>
        </div>
      </div>
    </div>
  )
}

export default Login