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
            <div className="w-full px-3 py-10 container mx-auto">
                <h2 className="text-3xl font-bold text-center text-coolgray-700 dark:text-coolgray-300">
                    Blog Posts
                </h2>
                <hr className="my-5 mx-auto dark:border-gray-600" />
                <div className="lg:px-3 md:px-5 grid gap-4 lg:gap-6 xl:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
