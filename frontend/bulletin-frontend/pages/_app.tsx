import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { AudioListProvider } from '../components/streamContext'
import theme from '../theme';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <AudioListProvider>
        <Component {...pageProps} />
      </AudioListProvider>
    </ChakraProvider>
  )
}

export default MyApp
