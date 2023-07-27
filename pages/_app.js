import '@/styles/globals.css'
import Head from 'next/head'
import Layout from '../components/layout'
import { AuthProvider } from '/AuthContext';
import { createPagesBrowserClient } from '@supabase/auth-helpers-nextjs'
import { SessionContextProvider } from '@supabase/auth-helpers-react'
import { useState } from 'react'

export default function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createPagesBrowserClient())

  return (
    <Layout>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
      </SessionContextProvider>

    </Layout>
  )
}