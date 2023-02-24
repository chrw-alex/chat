import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>LOGO</span>
        <span className='title'>Login</span>
        <form>
          <input type='email' placeholder='enter your email' />
          <input type='password' placeholder='enter your password' />
          <button>Sign in</button>
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