import React from 'react'
import {TUser} from '../../features/Auth/types'
import img from './signOut.svg'
import './index.css'

interface IUserProps {
  user: TUser
  handleSignOut: () => void
}

const User: React.FC<IUserProps> = (props: IUserProps) => {
  const {user, handleSignOut} = props

  return (
      <div className="user">
        <span className="user__img">
          <img src={user?.photoURL} alt=""/>
        </span>
        <span className="user__name">{user?.displayName}</span>
        <button className="user__sign-out" onClick={handleSignOut}>
          <img src={img} alt="" width={30} height={30}/>
        </button>
      </div>
  )
}

export default User
