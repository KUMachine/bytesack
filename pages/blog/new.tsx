import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '../../components/header/Header'
import Link from 'next/link'
import useAuth from '../../utils/useAuth'

export const getServerSideProps: GetServerSideProps = async (context) => {
    // const user = useAuth(context.req.cookies['bytesack-auth-token'])
    return {
        props: {
            ...(await serverSideTranslations(context.locale as string, [
                'common',
                'blog',
            ])),
            user,
        },
    }
}

export default function Blog() {
    return (
        <>
            <Header />
        </>
    )
}
