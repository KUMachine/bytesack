import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import Header from '../components/header/Header'

export const getStaticProps: GetStaticProps = async (context) => {
    return {
        props: {
            ...(await serverSideTranslations(context.locale as string, [
                'common',
            ])),
        },
    }
}

const About = () => {
    const { t } = useTranslation()
    return (
        <>
            <Header />
            <Link href="/">
                <a className="bg-darkgreen">{t('Lang')}</a>
            </Link>
        </>
    )
}

export default About
