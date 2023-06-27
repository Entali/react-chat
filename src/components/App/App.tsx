import React, {useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Auth from '../../features/Auth'
import Login from '../../features/Auth/Login'
import SignUp from '../../features/Auth/SignUp'
import ChatGpt from '../../features/ChatGPT'
import './App.css'

const App:React.FC = () => {
  const [user, setUser] = useState<any>(null)

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Auth user={user} />}/>
          <Route path="/login" element={<Login user={user} setUser={setUser} />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/chat" element={<ChatGpt />}/>
        </Routes>
      </Router>
  )
}

export default App
