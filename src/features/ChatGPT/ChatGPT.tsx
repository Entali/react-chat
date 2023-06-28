import React, {useEffect} from 'react'
import Loader from './Loader'
import User from '../../components/User'
import {useAuth} from '../Auth/AuthContext'
import {useNavigate} from 'react-router-dom'
import {ChatGPTProvider, useChatGPT} from './ChatGPTContext'
import Form from './Form'
import './index.css'

const ChatGptComponent: React.FC = () => {
  const navigate = useNavigate()
  const {user, handleSignOut} = useAuth()
  const {
    getOpenAIResponse,
    prompt,
    setPrompt,
    isTyping,
    response
  } = useChatGPT()

  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [navigate, user])

  return (
      <div className="chat-gpt">
        {user && (
            <>
              <User user={user}/>
              <button className="button" onClick={handleSignOut}>
                Sign out
              </button>
            </>
        )}
        <Form getResponse={getOpenAIResponse} prompt={prompt}
              setPrompt={setPrompt}/>
        {isTyping && <Loader/>}
        {!!response && <div className="chat-gpt__msg">{response}</div>}
      </div>
  )
}

const ChatGPT: React.FC = () =>
    <ChatGPTProvider><ChatGptComponent /></ChatGPTProvider>


export default ChatGPT
