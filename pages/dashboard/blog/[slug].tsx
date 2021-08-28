import { GetServerSideProps } from 'next'
import useAuth from 'utils/useAuth'
import StackedNav from 'components/dashboard/StackedNav'
import prisma from 'lib/prisma'
import Image from 'next/image'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const authUser = useAuth(context.req.cookies['bytesack-jwt-token'])
    if (!authUser) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        }
    }
    const { slug } = context.query
    const post = await prisma.post.findUnique({
        where: { slug: slug as string },
    })
    const user = await prisma.user.findUnique({
        //@ts-ignore
        where: { email: authUser.email },
        include: {
            posts: {
                select: { slug: true, title: true, published: true },
                orderBy: { createdAt: 'desc' },
            },
        },
    })
    return {
        props: { user: JSON.stringify(user), post: JSON.stringify(post) },
    }
}

export default function BlogPostEdit(props: any) {
    const user = JSON.parse(props.user)
    const post = JSON.parse(props.post)
    return (
        <div>
            <StackedNav active="blog" user={user} />
            <main className="bg-snow min-h-screen">
                <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-bold">{post.title}</h1>
                    <div>{post.slug}</div>
                    <div className="flex justify-center">
                        <Image
                            className="bg-gray-400"
                            width="800"
                            height="400"
                            src={post.image}
                            alt={post.slug}
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}
