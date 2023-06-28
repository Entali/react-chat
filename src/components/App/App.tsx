import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from 'react-query'
import {AuthProvider} from '../../features/Auth/AuthContext'
import Auth from '../../features/Auth'
import ChatGpt from '../../features/ChatGPT'
import Layout from '../Layout'

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Layout>
            <Router>
              <Routes>
                <Route path="/" element={<Auth/>}/>
                <Route path="/chat" element={<ChatGpt/>}/>
              </Routes>
            </Router>
          </Layout>
        </AuthProvider>
      </QueryClientProvider>
  )
}

export default App
