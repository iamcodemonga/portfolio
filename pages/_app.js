import '@/styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'
import Router from 'next/router'
import { useState, useEffect } from 'react'
import Loader from '@/components/Loader'

export default function App({ Component, pageProps }) {

  const [ loading, setLoading ] = useState(false);
  useEffect(() => {

    const startLoading = () => setLoading(true)
    const endLoading = () => setLoading(false)

    Router.events.on("routeChangeStart", startLoading)
    Router.events.on("routeChangeComplete", endLoading)
    Router.events.on("routeChangeError", endLoading)

    return () => {
      Router.events.off("routeChangeStart", startLoading)
      Router.events.off("routeChangeComplete", endLoading)
      Router.events.off("routeChangeError", endLoading)
    }
  }, [])

  return <>
                <Head>
                    <title>Emmanuel Ufot - Professional software developer</title>
                </Head>
                {loading && <Loader loading={loading} />}
                <Component {...pageProps} />
                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></Script>
            </>
}
