import Head from 'next/head'
import { PrismaClient, post, user } from '@prisma/client'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '../../components/header/Header'
import Link from 'next/link'
import useAuth from '../../utils/useAuth'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const prisma = new PrismaClient()
    const user = useAuth(context.req.cookies['bytesack-auth-token'])
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
            user,
        },
    }
}

interface BlogProps {
    post: post
    user: user
}

export default function Blog({ post, user }: BlogProps) {
    return (
        <>
            <Header user={user} />
            <main>{post.title}</main>
        </>
    )
}
