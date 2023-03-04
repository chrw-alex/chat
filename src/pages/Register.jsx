import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Add from '../img/addAvatar.png'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, storage, db } from '../firebase.js'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore'
import Preloader from "./../components/Preloader/Preloader";

const Register = () => {
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]


    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const storageRef = ref(storage, displayName)
      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          await updateProfile(res.user, {
            displayName,
            photoURL: downloadURL
          })
          await setDoc(doc(db, 'users', res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL
          })

          await setDoc(doc(db, 'userChats', res.user.uid), {})
          navigate('/')
          setIsLoading(false)
        })
      })
    } catch (err) {
      setError(err.message)
      setIsLoading(false)
    }
  }

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>LOGO</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='enter your name' />
          <input type='email' placeholder='enter your email' />
          <input type='password' placeholder='enter your password' />
          <input style={{ display: "none" }} className='file' type='file' id='file' />
          <label htmlFor='file'>
            <img src={Add} alt='add' />
            <span>Add an avatar</span>
          </label>
          {isLoading ? <Preloader /> : <button>Sign up</button>}
          {error && <span className='error'>{error}</span>}
        </form>
        <div>
          <p className='bottom'>You do have account?
            <Link className='link' to='/login'>Login</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Register