import React from 'react'
import {IUser} from '../../features/Auth/types.ts'
import './index.css'

interface IUserProps {
  user: IUser
}

const User: React.FC<IUserProps> = (props: IUserProps) => {
  const {user} = props

  return (
      <div className="user">
        <span className="user__img">
          <img src={user?.photoURL} alt=''/>
        </span>
        <span className="user__name">{user?.displayName}</span>
      </div>
  )
}

export default User
