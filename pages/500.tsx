import Footer from 'components/Footer'
import Header from 'components/header/Header'
import { ArrowRight } from 'react-feather'
import Link from 'next/link'

export default function _404() {
    return (
        <>
            <Header className="sticky top-0 z-30" />
            <div className="py-24 md:py-44 px-5 md:px-16 space-y-5 dark:bg-dark-blue dark:text-gray-400">
                <div className="text-lg md:text-xl font-bold text-pink-600 dark:text-pink-400">
                    500 ERROR
                </div>
                <div className="text-4xl md:text-6xl font-black">
                    Internal server error
                </div>
                <div className="text-lg md:text-xl">
                    Sorry, we failed to process you request.
                </div>
                <Link href="/">
                    <a>
                        <div className="text-xl flex items-center text-lightblue-500 my-2">
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
