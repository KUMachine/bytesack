import Head from 'next/head'
import { PrismaClient } from '@prisma/client'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '../components/header/Header'
import Banner from '../components/banner/Banner'
import Services from '../components/services/Services'
import userAuth from '../utils/userAuth'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const prisma = new PrismaClient()
    const user = userAuth(context.req.cookies['bytesack-auth-token'])
    console.log({ user })

    await prisma.$disconnect()
    return {
        props: {
            ...(await serverSideTranslations(context.locale as string, [
                'common',
                'home',
            ])),
            user,
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
            <Header className="" user={props.user} />
            <main className="bg-light dark:bg-dark h-screen">
                <div>{props.user && props.user.email}</div>
                <Banner />
                <Services />
            </main>
        </div>
    )
}
