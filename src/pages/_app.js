import '@/styles/globals.css'
import { CookiesProvider } from 'react-cookie'
import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'


export default function App({ Component, pageProps }) {
  const queryClient = React.useRef(new QueryClient())

  return (
    <QueryClientProvider client={queryClient.current}>
        <CookiesProvider><Component {...pageProps} /></CookiesProvider>
    </QueryClientProvider>
  )
}
