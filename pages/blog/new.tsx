import Head from 'next/head'
import { GetServerSidePropsContext, InferGetServerSidePropsType } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '../../components/header/Header'
import Link from 'next/link'
import useAuth from '../../utils/useAuth'

export const getServerSideProps = async (
    context: GetServerSidePropsContext
) => {
    // const user = useAuth(context.req.cookies['bytesack-auth-token'])
    return {
        props: {
            ...(await serverSideTranslations(context.locale as string, [
                'common',
                'blog',
            ])),
            // user,
        },
    }
}

const Blog = ({}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
    return (
        <>
            <Header />
        </>
    )
}

export default Blog
