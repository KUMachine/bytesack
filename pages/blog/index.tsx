import Head from 'next/head'
import { PrismaClient, post } from '@prisma/client'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '../../components/header/Header'
import Link from 'next/link'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const prisma = new PrismaClient()
    let post = await prisma.post.findFirst({
        where: {
            published: true,
        },
    })
    const jsonPost = JSON.parse(JSON.stringify(post))
    await prisma.$disconnect()
    return {
        props: {
            ...(await serverSideTranslations(context.locale as string, [
                'common',
                'blog',
            ])),
            post: jsonPost,
        },
    }
}

interface BlogProps {
    post: post
}

export default function Blog({ post }: BlogProps) {
    return (
        <>
            <Header />
            <main>{post.title}</main>
        </>
    )
}
