import Footer from 'components/Footer'
import Header from 'components/header/Header'
import { ArrowRight } from 'react-feather'
import Link from 'next/link'

export default function _404() {
    return (
        <>
            <Header className="sticky top-0 z-30" />
            <div className="space-y-5 py-24 px-5 dark:bg-dark-blue dark:text-gray-400 md:py-44 md:px-16">
                <div className="text-lg font-bold text-pink-600 dark:text-pink-400 md:text-xl">
                    404 ERROR
                </div>
                <div className="text-4xl font-black md:text-6xl">
                    Page not found
                </div>
                <div className="text-lg md:text-xl">
                    Sorry, we couldn&apos;t find the page you&apos;re looking
                    for.
                </div>
                <Link href="/">
                    <a>
                        <div className="my-2 flex items-center text-xl text-lightblue-500">
                            <span>Go back home </span>
                            <ArrowRight />
                        </div>
                    </a>
                </Link>
            </div>
            <Footer />
        </>
    )
}
