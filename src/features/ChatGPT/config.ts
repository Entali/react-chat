import {
  Configuration,
  OpenAIApi
} from 'openai'

const configuration = new Configuration({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY_JENYA,
})

const openai = new OpenAIApi(configuration)

export const OPENAI_MODEL = 'gpt-3.5-turbo'

export default openai
