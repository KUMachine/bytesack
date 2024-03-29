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
            <nav className={t('font')}>
                <div className="bg-snow bg-opacity-70 backdrop-blur-sm backdrop-filter dark:bg-dark-blue dark:bg-opacity-90">
                    <div className="container mx-auto flex items-center justify-between">
                        <Hamburger className="mx-2 md:hidden" />
                        <div className="flex items-center">
                            <Link href="/">
                                <a>
                                    <div className="flex items-center space-x-2 px-5 pb-4 pt-3">
                                        <div>
                                            <Image
                                                className="filter dark:contrast-200"
                                                src="/bytesack-logo-simple-cropped.svg"
                                                alt="bytesack-logo"
                                                height="40"
                                                width="40"
                                            />
                                        </div>
                                        <span className="font-pacifico text-2xl font-semibold text-gray-700 dark:text-gray-300 md:text-3xl">
                                            {t('Bytesack')}
                                        </span>
                                    </div>
                                </a>
                            </Link>
                            <ul className="my-0 hidden items-center text-2xl md:flex">
                                <li>
                                    <Link href="/blog">
                                        <a className="px-2 py-6 text-gray-700 hover:text-lightblue-500 hover:underline dark:text-gray-300">
                                            {t('Blog')}
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/services">
                                        <a className="px-2 py-6 text-gray-700 hover:text-lightblue-500 hover:underline dark:text-gray-300">
                                            {t('Services')}
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about">
                                        <a className="px-2 py-6 text-gray-700 hover:text-lightblue-500 hover:underline dark:text-gray-300">
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
