import { GetServerSideProps } from 'next'
import useAuth from 'utils/useAuth'
import StackedNav from 'components/dashboard/StackedNav'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const user = useAuth(context.req.cookies['bytesack-jwt-token'])
    if (!user) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        }
    }
    return {
        props: { user },
    }
}

export default function Users(props: any) {
    return (
        <div>
            <StackedNav active="users" user={props.user} />
            <main className="bg-snow">
                <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
                    {/* Replace with your content */}
                    <div className="px-4 py-6 sm:px-0">
                        <div className="h-96 rounded-lg border-4 border-dashed border-orange-200" />
                    </div>
                    {/* /End replace */}
                </div>
            </main>
        </div>
    )
}
