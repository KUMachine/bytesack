import { useTranslation } from 'react-i18next'
import DarkModeToggle from './DarkModeToggle'
import Hamburger from './Hambuerger'
import LangToggle from './LangToggle'
import Link from 'next/link'
import UserAvatar from './UserAvatar'

interface HeaderProps {
    className?: string
    user?: { email: string; role: string }
}

const Header = ({ className, user }: HeaderProps) => {
    const { t } = useTranslation()
    return (
        <header className={className} dir={t('dir')}>
            <nav>
                <div className="flex items-center justify-between border-gray-200 bg-lightblue-200 dark:bg-dark">
                    <Hamburger className="md:hidden mx-2" />
                    <div className="flex items-center">
                        <div className="px-5 pb-6 pt-5">
                            <span className="text-2xl md:text-3xl font-pacifico font-semibold text-gray-700 dark:text-gray-300">
                                Bytesack
                            </span>
                        </div>
                        <ul className="hidden md:flex my-0 items-center text-2xl font-bold text-gray-600 dark:text-gray-300">
                            <li className="px-2 py-6 hover:text-pink-500">
                                <Link href="/">
                                    <a>{t('Home')}</a>
                                </Link>
                            </li>
                            <li className="px-2 py-6 hover:text-pink-500">
                                <Link href="/blog">
                                    <a>{t('Blog')}</a>
                                </Link>
                            </li>
                            <li className="px-2 py-6 hover:text-pink-500 ">
                                <Link href="/services">
                                    <a>{t('Services')}</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center font-bold md:mx-2">
                        <LangToggle className="mx-1 md:mx-2" />
                        <DarkModeToggle className="mx-1 md:mx-2" />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
