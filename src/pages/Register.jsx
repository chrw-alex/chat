import { Link } from 'react-router-dom'
import Add from '../img/addAvatar.png'

const Register = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>LOGO</span>
        <span className='title'>Register</span>
        <form>
          <input type='text' placeholder='enter your name' />
          <input type='email' placeholder='enter your email' />
          <input type='password' placeholder='enter your password' />
          <input className='file' type='file' id='file' />
          <label htmlFor='file'>
            <img src={Add} alt='add' />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <div>
          <span className='bottom'>You do have account?</span>
          <Link className='link' to='/login'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Register