import Head from 'next/head'
import { PrismaClient } from '@prisma/client'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '../components/header/Header'
import Link from 'next/link'
import Banner from '../components/banner/Banner'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const prisma = new PrismaClient()
    const post = await prisma.post.findFirst({
        where: {
            published: true,
        },
    })
    await prisma.$disconnect()
    return {
        props: {
            ...(await serverSideTranslations(context.locale as string, [
                'common',
                'home',
            ])),
        },
    }
}

export default function Home() {
    return (
        <div>
            <Head>
                <title>Bytesack</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header className="" />
            <main className="bg-light dark:bg-dark h-screen">
                <Banner />
            </main>
        </div>
    )
}
