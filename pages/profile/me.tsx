import Head from 'next/head'
import { PrismaClient, user } from '@prisma/client'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '../../components/header/Header'
import userAuth from '../../utils/useAuth'
import { FilePlus, Settings } from 'react-feather'
import Link from 'next/link'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const prisma = new PrismaClient()
    const authUser = userAuth(context.req.cookies['bytesack-auth-token'])
    if (!authUser) {
        return { redirect: { destination: '/login', permanent: false } }
    }
    const user = await prisma.user.findUnique({
        where: { email: authUser.email },
        select: { username: true, email: true, bio: true },
    })
    if (!user) {
        return { redirect: { destination: '/login', permanent: false } }
    }

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

interface MeProps {
    user: user
}

export default function Me({ user }: MeProps) {
    return (
        <div>
            <Head>
                <title>Bytesack</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header className="" user={user} />
            <main className="bg-light dark:bg-dark h-screen">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="mx-12 mt-24">
                        <div>
                            <img
                                src="https://i.pravatar.cc/150?img=10"
                                alt="profile avatar"
                                className="w-28 h-28 rounded-full"
                            />
                        </div>
                        <div className="text-3xl font-bold my-2">
                            {user.username}
                        </div>
                        <div className="text-5xl font-semibold">{user.bio}</div>
                        <div className="flex my-16">
                            <Link href="/blog/new">
                                <a>
                                    <div className="flex mx-1 items-center font-bold bg-coolgray-200 text-coolgray-700 text-base p-3 rounded-md">
                                        <FilePlus size="16" />
                                        <span className="mx-0.5">New Post</span>
                                    </div>
                                </a>
                            </Link>
                            <div className="flex mx-1 items-center font-bold bg-coolgray-200 text-coolgray-700 text-base p-3 rounded-md">
                                <Settings size="15" />
                                <span className="mx-0.5">Setting</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="z-10 relative my-16">
                            <img
                                src="https://picsum.photos/id/297/700/450"
                                alt="profile cover photo"
                                className="mx-auto"
                            />
                        </div>
                        <div className="z-0 w-1/2 h-3/4 absolute top-0 right-0 bg-pink-400"></div>
                    </div>
                </div>
                <div className="bg-gray-100 border-b border-gray-300">
                    <div className="mx-5 font-bold text-lg py-3">
                        Posts: <span className="text-gray-500">123</span>
                    </div>
                </div>
            </main>
        </div>
    )
}
