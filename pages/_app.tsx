import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import { appWithTranslation } from 'next-i18next'
import { AppProps } from 'next/app'
import router from 'next/router'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import SplashLoading from '../components/SplashLoading'

function MyApp({ Component, pageProps }: AppProps) {
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
        router.events.on('routeChangeStart', () => setLoading(true))
        router.events.on('routeChangeComplete', () => setLoading(false))
        router.events.on('routeChangeError', () => setLoading(false))
    }, [])
    return (
        <>
            <Head>
                <meta name="theme-color" content="#add8e6"></meta>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {loading && <SplashLoading />}
            <Component {...pageProps} />
        </>
    )
}

export default appWithTranslation(MyApp)
