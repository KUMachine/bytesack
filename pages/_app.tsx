import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import { appWithTranslation } from 'next-i18next'
import { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
