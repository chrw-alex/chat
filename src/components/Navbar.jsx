import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import { useContext } from 'react'
import { ChatContext } from '../context/ChatContext'

const Navbar = () => {

  const { currentUser } = useContext(AuthContext)
  const { dispatch } = useContext(ChatContext);

  const logout = () => {
    signOut(auth)
    dispatch({ type: 'INITIAL' })
  }

  return (
    <div className='navbar'>
      <span className='logo'>LOGO</span>
      <div className='user'>
        <img src={currentUser.photoURL} alt='user' />
        <span>{currentUser.displayName}</span>
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar