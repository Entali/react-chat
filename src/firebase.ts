// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebase = {
  apiKey: 'AIzaSyD4oN6xg61NzNVQkNXV-br9X4pQIE7ik1g',
  authDomain: 'entali-react-chat.firebaseapp.com',
  projectId: 'entali-react-chat',
  storageBucket: 'entali-react-chat.appspot.com',
  messagingSenderId: '614039080999',
  appId: '1:614039080999:web:3564a035b3c38ef0a2be02',
  measurementId: 'G-J5WN3W2E2C'
}

// Initialize Firebase
const app = initializeApp(firebase)

const auth = getAuth()
auth.languageCode = 'en'

const provider = new GoogleAuthProvider()

export { app, auth, provider }
