import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'
import Services from '../components/services/Services'
import BlogList from '../components/blog/BlogList'
import Footer from '../components/Footer'
import prisma from 'lib/prisma'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const posts = await prisma.post.findMany({
        include: { author: { select: { avatar: true } } },
    })
    await prisma.$disconnect()
    return {
        props: {
            ...(await serverSideTranslations(context.locale as string, [
                'common',
                'home',
            ])),
            posts: JSON.stringify(posts),
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
            <Header className="sticky top-0 z-30" />
            <main className="bg-light dark:bg-dark">
                <Banner />
                <Services />
                <BlogList posts={JSON.parse(props.posts)} />
            </main>
            <Footer />
        </div>
    )
}
