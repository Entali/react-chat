import User from '../User'
import {useAuth} from '../../features/Auth/AuthContext'
import './index.css'

const Layout = ({children}: any) => {
  const {user, handleSignOut} = useAuth()

  return (
      <section className="layout">
        <header className="layout__header">
          <h2>React Chat GPT</h2>
          {user && <User user={user} handleSignOut={handleSignOut}/>}
        </header>
        <section className="layout__content">
          {children}
        </section>
      </section>
  )
}

export default Layout
