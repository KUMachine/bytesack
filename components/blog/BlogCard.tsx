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
            className={`flex flex-col  overflow-hidden rounded-lg bg-light shadow-lg drop-shadow-xl dark:bg-gray-700 ${className}`}
        >
            <div
                className="h-64 w-full  bg-coolgray-500"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundClip: 'content-box',
                }}
            />
            <div className="flex flex-auto flex-col justify-between px-8 pt-8 pb-2">
                <div>
                    <div className="flex flex-wrap">
                        <span
                            key={tags}
                            className="mx-0.5 cursor-pointer font-bold text-purple-400 hover:underline"
                        >
                            #{tags}
                        </span>
                    </div>
                    <Link href={`/blog/${slug}`}>
                        <a>
                            <div className="py-1 text-2xl font-bold text-dark dark:text-snow">
                                {title}
                            </div>
                        </a>
                    </Link>

                    <div className="text-lg text-dark dark:text-gray-300">
                        {description}
                    </div>
                </div>

                <div className="flex py-5">
                    <img
                        src={authorImage}
                        alt="areyan naaman"
                        className="h-12 w-12 rounded-full shadow-sm"
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
