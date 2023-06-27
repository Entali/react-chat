import React, {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const Auth: React.FC = () => {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/login')
  }, [navigate])

  return (
      <div/>
  )
}

export default Auth
