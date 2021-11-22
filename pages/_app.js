import { useState } from 'react'
import '../styles/globals.css'
import Layout from './components/layout/Layout'
import { ContextProvider } from './contexts/gridContext'

function MyApp({ Component, pageProps }) {


  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
    ) 
}

export default MyApp
