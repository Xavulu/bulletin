import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { AudioListProvider } from '../components/streamContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AudioListProvider>
        <Component {...pageProps} />
      </AudioListProvider>
    </ChakraProvider>
  )
}

export default MyApp
