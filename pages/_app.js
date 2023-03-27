import '../configureAmplify'
import '../styles/globals.css'
import '@aws-amplify/ui-react/styles.css'
import Layout from './Layout'

import theme from '../styles/theme'

import { Flex, useTheme, ThemeProvider, useBreakpointValue } from '@aws-amplify/ui-react'

function MyApp({ Component, pageProps }) {

  const { tokens } = useTheme()
    
  return (
    <ThemeProvider theme={theme}>

      <Flex direction='column' backgroundColor={tokens.colors.neutral[10]} minHeight='100vh' gap='0'>

          <Flex justifyContent='center' direction='column'>

            <Layout class="wrapper">
              <Component {...pageProps} />
            </Layout>
          </Flex>
      </Flex>
    </ThemeProvider>
  )
}

export default MyApp