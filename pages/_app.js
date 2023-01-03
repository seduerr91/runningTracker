import '../configureAmplify'
import '../styles/globals.css'
import '@aws-amplify/ui-react/styles.css'
import Layout from './Layout'

import theme from '../styles/theme'

import { useState, useEffect } from 'react'
import { Flex, useTheme, ThemeProvider, useBreakpointValue } from '@aws-amplify/ui-react'
import { Auth } from 'aws-amplify'

function MyApp({ Component, pageProps }) {

  const { tokens } = useTheme()
  const device = useBreakpointValue({ base: 'phone', small: 'phone', medium: 'tablet', large: 'computer' })
    
  return (
    <ThemeProvider theme={theme}>

      <Flex direction='column' backgroundColor={tokens.colors.neutral[10]} minHeight='100vh' gap='0'>

          <Flex justifyContent='center' direction='column'>

            <Layout z-index='-10' class="wrapper">
              <Component {...pageProps} />
            </Layout>
          </Flex>
      </Flex>
    </ThemeProvider>
  )
}

export default MyApp