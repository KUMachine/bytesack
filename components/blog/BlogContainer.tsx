import Footer from 'components/Footer'
import Header from 'components/header/Header'
import { useRouter } from 'next/router'

interface BlogContainerProps {
    children: JSX.Element[] | string | any
}

export default function BlogContainer({ children }: BlogContainerProps) {
    const router = useRouter()
    const dir = router.locale === 'en' ? 'ltr' : 'rtl'
    return (
        <>
            <Header className="sticky top-0 z-30" />
            <div
                className="bg-gray-50 text-dark-blue dark:bg-coolgray-800 dark:text-rice"
                dir={dir}
            >
                <div className="container mx-auto min-h-screen space-y-8 px-2 pb-5 text-lg lg:max-w-5xl">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}
