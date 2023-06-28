import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from 'react-query'
import Auth from '../../features/Auth'
import ChatGpt from '../../features/ChatGPT'
import './App.css'

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/" element={<Auth />}/>
            <Route path="/chat" element={<ChatGpt/>}/>
          </Routes>
        </Router>
      </QueryClientProvider>
  )
}

export default App
