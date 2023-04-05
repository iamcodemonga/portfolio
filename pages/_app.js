import '@/styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return <>
                <Head>
                  <title>Emmanuel Ufot - Professional software developer</title>
                </Head>
                <Component {...pageProps} />
                <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></Script>
            </>
}
