import React, {useEffect} from 'react'
import {AuthProvider, useAuth} from './AuthContext'
import {useNavigate} from 'react-router-dom'
import User from '../../components/User'
import './index.css'

const AuthComponent: React.FC = () => {
  const navigate = useNavigate()
  const {user, isLoading, handleSignIn, handleSignOut} = useAuth()

  useEffect(() => {
    // if (user) {
    //   navigate('/chat')
    // }
  }, [navigate, user])

  return (
      <div className="auth">
        {isLoading && <div>loading...</div>}
        {user && (
            <>
              <User user={user}/>
              <button className="button" onClick={handleSignOut}>
                Sign out
              </button>
            </>
        )}
        {!user?.displayName && !isLoading && (
            <button className="button" onClick={handleSignIn}>
              Sign in
            </button>
        )}
      </div>
  )
}

const Auth: React.FC = () => {
  return (
      <AuthProvider><AuthComponent/></AuthProvider>
  )
}

export default Auth
