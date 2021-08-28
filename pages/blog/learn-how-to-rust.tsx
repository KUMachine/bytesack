import BlogContainer from 'components/blog/BlogContainer'
import BlogHeader from 'components/blog/BlogHeader'
import CodeBlock from 'components/blog/sections/CodeBlock'
import Heading from 'components/blog/sections/Heading'
import List from 'components/blog/sections/List'
import Note from 'components/blog/sections/Note'
import { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'

export const getStaticProps: GetStaticProps = async (context) => {
    if (context.locale !== 'en') {
        return { notFound: true }
    }
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
            <BlogContainer>
                <BlogHeader
                    title="Fullstack App With TypeScript, PostgreSQL, Next.js, Prisma & GraphQL: Data Modeling"
                    date="february 08, 2021"
                    image="https://res.cloudinary.com/dugyq1qt9/image/upload/v1629968308/gfmnruzdu6kzcblqsebk.png"
                    description="This article is the first part of a course where we build a fullstack app with Next.js, GraphQL, TypeScript,Prisma and PostgreSQL. In this article, we'll create the data model and explore the different components of Prisma."
                    tags={['graphql', 'rust', 'typescript', 'prisma']}
                    author={{
                        name: 'Areyan naaman',
                        username: 'yan_are',
                        image: '/default-avatar.png',
                    }}
                />
                <Heading>The post starts here</Heading>
                <Note>
                    Note: Lorem ipsum dolor sit amet consectetur adipisicing
                    elit. Et quod quas asperiores minima consequuntur nam
                    debitis dolore officia repudiandae, fuga doloremque,
                    aspernatur sint consectetur modi aliquam nulla sed! Quo,
                    cupiditate.
                </Note>
                <Heading>The list of the items in the blog</Heading>
                <List>
                    <p>Hello list items in the blog</p>
                    <p>
                        Bonkers boys goes brooklyn
                        <List>
                            <p>Hello list items in the blog</p>
                            <p>Bonkers boys goes brooklyn</p>
                        </List>
                    </p>
                </List>
                <CodeBlock
                    language="javascript"
                    codeString={`console.log('Hello, World')
for (let i = 0; i < 10; i++){
    console.log(i)
}
const birthdate = new Date()`}
                />
            </BlogContainer>
        </>
    )
}

export default About
