import Head from 'next/head'
import { GetServerSideProps, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from '../../components/header/Header'
import Link from 'next/link'
import { useQuery, gql } from '@apollo/client'

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            ...(await serverSideTranslations(context.locale as string, [
                'common',
                'blog',
            ])),
        },
    }
}

const USER_QUERY = gql`
    query {
        users {
            id
            name
        }
    }
`

export default function Blog() {
    const { error, loading, data } = useQuery(USER_QUERY)
    return (
        <>
            <Header />
            <main>post title</main>
            {loading && <div>loading</div>}
            {error && <div>{JSON.stringify(error)}</div>}
            {data && JSON.stringify(data)}
        </>
    )
}
