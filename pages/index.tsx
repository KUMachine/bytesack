import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'
import Services from '../components/services/Services'
import BlogList from '../components/blog/BlogList'

export const getServerSideProps: GetServerSideProps = async (context) => {
    return {
        props: {
            ...(await serverSideTranslations(context.locale as string, [
                'common',
                'home',
            ])),
        },
    }
}

export default function Home(props: any) {
    return (
        <div>
            <Head>
                <title>Bytesack</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="bg-light dark:bg-dark h-screen">
                <Banner />
                <Services />
                <BlogList />
            </main>
        </div>
    )
}
