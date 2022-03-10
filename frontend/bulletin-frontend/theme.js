import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
    sm: '40em',
    md: '52em',
    lg: '64em',
    xl: '80em',
});

const fonts = { mono: `'Menlo', monospace`};

const theme = extendTheme({
    breakpoints,
    fonts,
    /*styles: {
        global: {
            body: {
                bg: 'gray.100',
            }
        }
    },*/
});


export default theme;