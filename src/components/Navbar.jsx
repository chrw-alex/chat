import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'

const Navbar = () => {

  const { currentUser } = useContext(AuthContext)

  return (
    <div className='navbar'>
      <span className='logo'>LOGO</span>
      <div className='user'>
        <img src={currentUser.photoURL} alt='user' />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar