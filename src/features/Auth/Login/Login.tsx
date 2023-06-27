import React from 'react'
import {auth, signInWithGoogle} from '../../../../firebase.config'
import { useAuthUser } from '@react-query-firebase/auth'

const Login: React.FC = () => {
  const { data, isLoading } = useAuthUser(['user'], auth)
  const { displayName } = data || {}

  return (
      <div className="login">
        {isLoading && <div>loading...</div>}
        {data && <div>Logged in as {displayName}</div>}
        {!displayName && !isLoading && (
            <button className="button" onClick={signInWithGoogle}>
              <i className="fab fa-google"></i>
              Sign in with google
            </button>
        )}
      </div>
  )
}

export default Login
