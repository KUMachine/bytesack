import { useTranslation } from 'react-i18next'
import DarkModeToggle from './DarkModeToggle'
import Hamburger from './Hambuerger'
import LangToggle from './LangToggle'
import Link from 'next/link'
import Image from 'next/image'

interface HeaderProps {
    className?: string
}

const Header = ({ className }: HeaderProps) => {
    const { t } = useTranslation()
    return (
        <header className={className} dir={t('dir')}>
            <nav>
                <div className="backdrop-filter backdrop-blur-sm bg-opacity-70 dark:bg-opacity-90 bg-snow dark:bg-dark-blue">
                    <div className="container mx-auto flex items-center justify-between">
                        <Hamburger className="md:hidden mx-2" />
                        <div className="flex items-center">
                            <Link href="/">
                                <a>
                                    <div className="px-5 pb-4 pt-3 flex items-center space-x-2">
                                        <div>
                                            <Image
                                                className="filter dark:contrast-200"
                                                src="/bytesack-logo-simple-cropped.svg"
                                                alt="bytesack-logo"
                                                height="40"
                                                width="40"
                                            />
                                        </div>
                                        <span className="text-2xl md:text-3xl font-pacifico font-semibold text-gray-700 dark:text-gray-300">
                                            Bytesack
                                        </span>
                                    </div>
                                </a>
                            </Link>
                            <ul className="hidden md:flex my-0 items-center text-2xl font-bold">
                                <li>
                                    <Link href="/blog">
                                        <a className="px-2 py-6 text-gray-700 dark:text-gray-300 hover:underline hover:text-lightblue-500">
                                            {t('Blog')}
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services">
                                        <a className="px-2 py-6 text-gray-700 dark:text-gray-300 hover:underline hover:text-lightblue-500">
                                            {t('Services')}
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about">
                                        <a className="px-2 py-6 text-gray-700 dark:text-gray-300 hover:underline hover:text-lightblue-500">
                                            {t('About')}
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center font-bold md:mx-2">
                            <LangToggle />
                            <DarkModeToggle className="mx-1 md:mx-2" />
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
