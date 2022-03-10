import type { AppProps } from 'next/app'
import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import { AudioListProvider } from '../components/streamContext'
import theme from '../theme';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <ColorModeProvider
        options={{ 
          useSystemColorMode: false,
        }}
      >
        <AudioListProvider>
          <Component {...pageProps} />
        </AudioListProvider>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
