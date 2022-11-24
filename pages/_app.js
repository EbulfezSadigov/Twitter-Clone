import '../styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import { AppContextProvider } from '../contexts/appcontext'
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return <SessionProvider session={session}>
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  </SessionProvider>
}

export default MyApp
