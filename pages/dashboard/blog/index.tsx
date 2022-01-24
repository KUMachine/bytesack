import { GetServerSideProps } from 'next'
import useAuth from 'utils/useAuth'
import StackedNav from 'components/dashboard/StackedNav'
import { Disclosure } from '@headlessui/react'
import BlogPostForm from 'components/dashboard/blog/BlogPostForm'
import prisma from 'lib/prisma'
import BlogTable from 'components/dashboard/BlogTable'
import 'node_modules/animate.css/animate.css'

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
        props: { user: JSON.stringify(user) },
    }
}

export default function Blog(props: any) {
    const user = JSON.parse(props.user)
    return (
        <div>
            <StackedNav active="blog" user={user} />
            <main className="min-h-screen bg-snow">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <Disclosure>
                        <div>
                            <div className="flex items-center justify-between">
                                <p className="text-xl text-purple-900">
                                    Your blog posts
                                </p>
                                <Disclosure.Button className="rounded-lg bg-purple-600 px-2 py-2 font-semibold text-gray-100">
                                    New Post
                                </Disclosure.Button>
                            </div>
                            <hr className="my-1 border border-purple-200" />
                            <Disclosure.Panel className="animate__animated animate__fadeIn text-gray-500">
                                <BlogPostForm />
                            </Disclosure.Panel>
                        </div>
                    </Disclosure>

                    <BlogTable posts={user.posts} />
                </div>
            </main>
        </div>
    )
}
