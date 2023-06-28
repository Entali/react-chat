import React, {useEffect} from 'react'
import {useAuth} from './AuthContext'
import {useNavigate} from 'react-router-dom'
import './index.css'

const Auth: React.FC = () => {
  const navigate = useNavigate()
  const {user, isLoading, handleSignIn} = useAuth()

  useEffect(() => {
    if (user) {
      navigate('/chat')
    }
  }, [navigate, user])

  return (
      <div className="auth">
        {isLoading && <div>loading...</div>}
        {!user?.displayName && !isLoading && (
            <button className="button" onClick={handleSignIn}>
              Sign in
            </button>
        )}
      </div>
  )
}

export default Auth
