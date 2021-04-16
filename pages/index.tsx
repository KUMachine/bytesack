import Head from 'next/head'
import { PrismaClient } from '@prisma/client'
import { GetServerSideProps } from 'next'
import Header from '../components/header/Header'
import { useRouter } from 'next/dist/client/router'

export const getServerSideProps: GetServerSideProps = async (context) => {
    console.log(process.env.NODE_ENV)

    const prisma = new PrismaClient()
    await prisma.post.update({ where: { id: 1 }, data: { published: true } })
    await prisma.$disconnect()
    return { props: {} }
}

export default function Home() {
    const router = useRouter()
    return (
        <div className="">
            <Head>
                <title>Bytesack</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="dark:bg-dark h-screen"></main>
        </div>
    )
}
