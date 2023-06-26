import { ChatCompletionRequestMessageRoleEnum } from 'openai'
import openai, { OPENAI_MODEL } from './config.ts'

export const getMessage = (prompt?: string) => {
  return [
    {
      role: ChatCompletionRequestMessageRoleEnum.System,
      content: prompt ? prompt : 'No message provided',
    }
  ]
}

export const getChatResponse = async (prompt: string) => {
  return await openai.createChatCompletion({
    messages: getMessage(prompt),
    model: OPENAI_MODEL,
  })
}
