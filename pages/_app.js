import '../styles/globals.css'
import Layout from '../components/layout/Layout'
import { ContextProvider } from '../components/contexts/gridContext'


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
