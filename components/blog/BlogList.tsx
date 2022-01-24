import { useTranslation } from 'react-i18next'
import { Post } from '@prisma/client'
import BlogCard from './BlogCard'

type BlogPost = Post & { author: { avatar: string } }
interface BlogListProps {
    className?: string
    posts: BlogPost[]
}

const BlogList = ({ className, posts }: BlogListProps) => {
    const { t } = useTranslation(['home'])
    return (
        <div className={`bg-snow dark:bg-dark ${className}`}>
            <div className="container mx-auto w-full px-3 py-10">
                <h2 className="text-center text-3xl font-bold text-coolgray-700 dark:text-coolgray-300">
                    Blog Posts
                </h2>
                <hr className="my-5 mx-auto dark:border-gray-600" />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:px-5 lg:grid-cols-3 lg:gap-6 lg:px-3 xl:gap-8">
                    {posts.map(
                        ({
                            id,
                            slug,
                            title,
                            description,
                            image,
                            readTime,
                            tags,
                            createdAt,
                            author,
                        }) => {
                            return (
                                <BlogCard
                                    key={id}
                                    slug={slug}
                                    title={title}
                                    description={description}
                                    image={image}
                                    className="bg-light"
                                    readTime={readTime}
                                    tags={tags}
                                    createdAt={createdAt}
                                    authorImage={author.avatar}
                                />
                            )
                        }
                    )}
                </div>
            </div>
        </div>
    )
}

export default BlogList
