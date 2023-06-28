import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react'
import {auth, provider} from '../../firebase'
import {
  useAuthSignInWithPopup,
  useAuthSignOut
} from '@react-query-firebase/auth'
import {TUser} from './types.ts'



interface IAuthContext {
  user: TUser
  isLoading: boolean
  handleSignIn: () => void
  handleSignOut: () => void
}

const defaultAuthContext: IAuthContext = {
  user: null,
  isLoading: false,
  handleSignIn: () => null,
  handleSignOut: () => null
}

const AuthContext = createContext<IAuthContext>(defaultAuthContext)

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<TUser>(null)

  const {
    mutate: signIn,
    isLoading: isSignInLoading
  } = useAuthSignInWithPopup(auth, {
    onSuccess(data) {
      const {user} = data || {}

      setUser({
        displayName: user.displayName || '',
        email: user.email || '',
        photoURL: user.photoURL || ''
      })
    }
  })

  const {
    mutate: signOut,
    isLoading: isSignOutLoading
  } = useAuthSignOut(auth, {
    onSuccess() {
      setUser(null)
    }
  })

  const handleSignIn = useCallback(() => signIn({provider}), [signIn])

  const handleSignOut = useCallback(() => signOut(), [signOut])

  const isLoading = isSignInLoading || isSignOutLoading

  const data = useMemo(() => ({
    user,
    isLoading,
    handleSignIn,
    handleSignOut
  }), [handleSignIn, handleSignOut, isLoading, user])

  return (
      <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
  )
}

const useAuth = () => {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return context
}

export {AuthProvider, useAuth}
