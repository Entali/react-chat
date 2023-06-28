import {
  createContext,
  FormEvent,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react'
import {getChatResponse} from './api.ts'

export interface IChatGPTContext {
  prompt: string
  setPrompt: (prompt: string) => void
  response: string
  isTyping: boolean
  getOpenAIResponse: (e: FormEvent<EventTarget>) => Promise<void> | null
}

const defaultChatGPTContext: IChatGPTContext = {
  prompt: '',
  setPrompt: () => null,
  response: '',
  isTyping: false,
  getOpenAIResponse: () => null
}

const ChatGPTContext = createContext<IChatGPTContext>(defaultChatGPTContext)

const ChatGPTProvider = ({children}: any) => {
  const [prompt, setPrompt] = useState<string>('')
  const [response, setResponse] = useState<string>('')
  const [isTyping, setIsTyping] = useState<boolean>(false)

  const getOpenAIResponse = useCallback(async (e: FormEvent<EventTarget>) => {
    e.preventDefault()
    if (!prompt) return

    setIsTyping(true)

    try {
      const res = await getChatResponse(prompt)

      if (res.status === 200) {
        setResponse(res.data.choices[0].message?.content as string)
      }
    } catch (err) {
      setResponse('Error')
      throw new Error(err as string)
    } finally {
      setIsTyping(false)
    }
  }, [prompt])

  const data = useMemo(() => ({
    prompt,
    setPrompt,
    response,
    isTyping,
    getOpenAIResponse
  }), [isTyping, prompt, response, getOpenAIResponse])

  return (
      <ChatGPTContext.Provider value={data}>
        {children}
      </ChatGPTContext.Provider>
  )
}

const useChatGPT = () => {
  const context = useContext(ChatGPTContext)

  if (context === undefined) {
    throw new Error('useChatGPT must be used within a ChatGPTProvider')
  }

  return context
}

export {ChatGPTProvider, useChatGPT}
