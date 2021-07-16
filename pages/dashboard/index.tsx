import Head from 'next/head'
import { GetServerSideProps } from 'next'
import prisma from 'lib/prisma'

export const getServerSideProps: GetServerSideProps = async (context) => {
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
            posts: JSON.stringify(posts),
        },
    }
}

export default function Home() {
    return (
        <>
            <Head>
                <title>Bytesack</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>dashboard</div>
        </>
    )
}
