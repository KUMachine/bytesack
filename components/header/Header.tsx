import { useTranslation } from 'react-i18next'
import DarkModeToggle from './DarkModeToggle'
import Hamburger from './Hambuerger'
import LangToggle from './LangToggle'
import Link from 'next/link'

interface HeaderProps {
    className?: string
}

const Header = ({ className }: HeaderProps) => {
    const { t } = useTranslation()
    return (
        <header className={className} dir={t('dir')}>
            <nav>
                <div className="flex items-center justify-between border dark:border-0 border-gray-200 bg-light dark:bg-dark">
                    <Hamburger className="md:hidden mx-2" />
                    <div className="flex items-center">
                        <div className="px-5 pb-6 pt-5">
                            <span className="text-2xl md:text-3xl font-pacifico font-semibold text-gray-700 dark:text-gray-300">
                                Bytesack
                            </span>
                        </div>
                        <ul className="hidden md:flex my-0 items-center text-lg font-bold text-gray-600 dark:text-gray-300">
                            <li className="px-2 py-6 hover:text-pink-500">
                                {t('Home')}
                            </li>
                            <li className="px-2 py-6 hover:text-pink-500">
                                <Link href="/blog">
                                    <a>{t('Blog')}</a>
                                </Link>
                            </li>
                            <li className="px-2 py-6 hover:text-pink-500 ">
                                {t('Business')}
                            </li>
                            <li className="px-2 py-6 hover:text-pink-500">
                                <Link href="/about">
                                    <a>{t('News')}</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center font-bold">
                        <LangToggle />
                        <DarkModeToggle className="mx-3" />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
