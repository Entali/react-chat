import React, { useState, FormEvent } from 'react'
import { getChatResponse } from './api'
import Loader from './Loader'
import './index.css'

const ChatGpt: React.FC = () => {
  const [prompt, setPrompt] = useState<string | undefined>('')
  const [response, setResponse] = useState<string | undefined>('')
  const [isTyping, setIsTyping] = useState<boolean>(false)

  const getOpenAIResponse = async (e: FormEvent<EventTarget>) => {
    e.preventDefault()
    if (!prompt) return

    setIsTyping(true)

    try {
      const res = await getChatResponse(prompt)

      if (res.status === 200) {
        setResponse(res.data.choices[0].message?.content)
      }
    } catch (err) {
      setResponse('Error')
      throw new Error(err as string)
    } finally {
      setIsTyping(false)
    }
  }

  return (
      <div className="chat-gpt">
        <form onSubmit={getOpenAIResponse} className="chat-gpt__form">
          <input
              id="chat-input"
              type="text"
              value={prompt}
              className="chat-gpt__input"
              onChange={e => setPrompt(e.target.value)}
          />
          <button type="submit" className="chat-gpt__submit">Ask AI</button>
        </form>
        {isTyping && <Loader />}
        {Boolean(response) && <div className="chat-gpt__msg">{response}</div>}
      </div>
  )
}

export default ChatGpt
