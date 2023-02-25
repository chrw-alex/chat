import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCYKNjdZ4fmpqYQ0wfMbWai92fASk38zB4",
  authDomain: "chat-e1c97.firebaseapp.com",
  projectId: "chat-e1c97",
  storageBucket: "chat-e1c97.appspot.com",
  messagingSenderId: "683947649013",
  appId: "1:683947649013:web:4cb357cabc02209d54a2bc"
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()