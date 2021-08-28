import Footer from 'components/Footer'
import Header from 'components/header/Header'

interface BlogContainerProps {
    children: JSX.Element[] | string | any
}
export default function BlogContainer({ children }: BlogContainerProps) {
    return (
        <>
            <Header className="sticky top-0 z-30" />
            <div className="bg-gray-50 dark:bg-coolgray-800 text-dark-blue dark:text-rice">
                <div className="container lg:max-w-5xl mx-auto min-h-screen px-2 space-y-8">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}
