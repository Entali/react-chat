import React, {useEffect} from 'react'
import {useAuth} from '../Auth/AuthContext'
import {useNavigate} from 'react-router-dom'
import {ChatGPTProvider, useChatGPT} from './ChatGPTContext'
import Form from './Form'
import './index.css'

const ChatGptComponent: React.FC = () => {
  const navigate = useNavigate()
  const {user} = useAuth()
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
        {!!response && <div className="chat-gpt__msg">{response}</div>}
        <Form getResponse={getOpenAIResponse} prompt={prompt}
              setPrompt={setPrompt} isTyping={isTyping}/>
      </div>
  )
}

const ChatGPT: React.FC = () =>
    <ChatGPTProvider><ChatGptComponent /></ChatGPTProvider>


export default ChatGPT
