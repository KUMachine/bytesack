import { GetServerSideProps } from 'next'
import Header from '../../components/header/Header'
import BlogPost from '../../components/blog'
import { PrismaClient } from '@prisma/client'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { slug } = context.query
    const prisma = await new PrismaClient()
    const post = await prisma.post.findUnique({
        where: { slug: slug as string },
        include: { body: true },
    })
    await prisma.$disconnect()
    return {
        props: {
            post: JSON.stringify(post),
        },
    }
}

interface BlogProps {
    post: string
}

export default function Blog({ post }: BlogProps) {
    return (
        <>
            <Header />
            <main className="container mx-auto bg-gray-200 dark:bg-dark dark:text-light min-h-screen relative">
                <BlogPost data={post} />
            </main>
        </>
    )
}
