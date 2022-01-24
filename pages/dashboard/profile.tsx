import { GetServerSideProps } from 'next'
import useAuth from 'utils/useAuth'
import StackedNav from 'components/dashboard/StackedNav'
import Image from 'next/image'
import prisma from 'lib/prisma'
import PersonalInfoForm from 'components/dashboard/profile/PersonalInfoForm'

export const getServerSideProps: GetServerSideProps = async (context) => {
    await prisma.$connect()
    const authUser: any = useAuth(context.req.cookies['bytesack-jwt-token'])
    if (!authUser) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        }
    }
    const user = await prisma.user.findUnique({
        where: { email: authUser.email },
    })
    await prisma.$disconnect()
    return {
        props: { user: JSON.stringify(user) },
    }
}

export default function Profile(props: any) {
    const user = JSON.parse(props.user)
    return (
        <div>
            <StackedNav active="profile" user={user} />
            <main className="min-h-screen bg-rice">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div
                        style={{
                            backgroundImage: `url(${user.cover})`,
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                        }}
                        className="relative h-60"
                    >
                        <div className="absolute bottom-0 left-5">
                            <span className="inline-block h-36 w-36 overflow-hidden rounded-full border-4 border-yellow-300 bg-gray-100">
                                <Image
                                    className="h-full w-full text-gray-300"
                                    src={user.avatar}
                                    height="200"
                                    width="200"
                                />
                            </span>
                        </div>
                    </div>
                    <PersonalInfoForm user={user} />
                </div>
            </main>
        </div>
    )
}
