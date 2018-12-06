import pino from 'pino'
import fetch from 'node-fetch'

const logger = pino()
export async function speakWisdom () {
  const res = await fetch(process.env.QUOTE_URL || 'https://talaikis.com/api/quotes/random/')
  const json: { quote: string } = await res.json()
  logger.info(json.quote)
  setTimeout(speakWisdom, Math.floor(Math.random() * 10000))
}

if (module == require.main) speakWisdom()
