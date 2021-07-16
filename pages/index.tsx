import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'
import Services from '../components/services/Services'
import BlogList from '../components/blog/BlogList'
import { Post, PrismaClient } from '@prisma/client'
import Footer from '../components/Footer'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const prisma = await new PrismaClient()
    await prisma.user.create({
        data: {
            name: 'are',
            email: 'areyan@email.com',
        },
    })
    const posts = await prisma.post.findMany()
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
