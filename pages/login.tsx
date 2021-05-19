import Head from 'next/head'
import { PrismaClient, Prisma } from '@prisma/client'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '../components/header/Header'
import Link from 'next/link'
import Banner from '../components/banner/Banner'
import Services from '../components/services/Services'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const prisma = new PrismaClient()
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

export default function Home(props: any) {
    return (
        <div>
            <Head>
                <title>Bytesack - Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="bg-light h-screen">
                <div className="absolute top-1/2 left-1/2 bg-coolgray-200 shadow-md">
                    login
                </div>
            </main>
        </div>
    )
}
