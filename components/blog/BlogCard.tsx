import Link from 'next/link'
import { Post } from 'prisma/prisma-client'
type BlogCardProps = Pick<
    Post,
    | 'slug'
    | 'title'
    | 'description'
    | 'image'
    | 'tags'
    | 'readTime'
    | 'createdAt'
> & { className: string; authorImage: string }

const BlogCard = ({
    slug,
    title,
    description,
    image,
    className = '',
    tags,
    readTime,
    createdAt,
    authorImage,
}: BlogCardProps) => {
    return (
        <div
            className={`flex flex-col bg-light dark:bg-gray-700 overflow-hidden rounded-lg shadow-lg drop-shadow-xl ${className}`}
        >
            <div
                className="w-full h-64 bg-coolgray-500"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundClip: 'content-box',
                }}
            />
            <div className="px-8 pt-8 pb-2 flex flex-col justify-between flex-auto">
                <div>
                    <div className="flex flex-wrap">
                        {tags.map((tag) => (
                            <span
                                key={tag}
                                className="text-purple-400 font-bold mx-0.5 hover:underline cursor-pointer"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                    <Link href={`/blog/${slug}`}>
                        <a>
                            <div className="text-2xl font-bold py-1 text-dark dark:text-snow">
                                {title}
                            </div>
                        </a>
                    </Link>

                    <div className="text-dark dark:text-gray-300 text-lg">
                        {description}
                    </div>
                </div>

                <div className="flex py-5">
                    <img
                        src={authorImage}
                        alt="areyan naaman"
                        className="w-12 h-12 rounded-full shadow-sm"
                    />
                    <div className="mx-2 text-dark dark:text-snow">
                        <div className="text-base font-bold">{'areyan'}</div>
                        <div>
                            {new Date(createdAt).toLocaleDateString()} -{' '}
                            {readTime} min read
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
