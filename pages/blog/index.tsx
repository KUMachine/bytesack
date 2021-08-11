import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

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

export default function Blog() {
    return (
        <>
            <main>post title</main>
        </>
    )
}
