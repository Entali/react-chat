import React from 'react'

const Form = ({getResponse, prompt, setPrompt}: {
  getResponse: (e: React.FormEvent<EventTarget>) => Promise<void> | null
  prompt: string
  setPrompt: (prompt: string) => void
}) => {
  return (
      <form onSubmit={getResponse} className="chat-gpt__form">
        <input
            id="chat-input"
            type="text"
            value={prompt}
            className="chat-gpt__input"
            onChange={e => setPrompt(e.target.value)}
        />
        <button type="submit" className="chat-gpt__submit">Ask AI</button>
      </form>
  )
}

export default Form
