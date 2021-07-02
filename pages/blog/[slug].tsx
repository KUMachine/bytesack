import { GetServerSideProps } from 'next'
import Header from '../../components/header/Header'
import BlogPost from '../../components/blog'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { slug } = context.query
    const data = await import('../../blog/' + slug + '.json')
    console.log(data.default.title)

    return {
        props: {
            postData: JSON.stringify(data),
        },
    }
}

interface BlogProps {
    postData: string
}

export default function Blog({ postData }: BlogProps) {
    return (
        <>
            <Header />
            <main className="container mx-auto bg-gray-200 dark:bg-dark dark:text-light min-h-screen relative">
                <BlogPost data={postData} />
            </main>
        </>
    )
}
