import Image from 'next/image'
import { Post } from 'prisma/prisma-client'
type BlogCardProps = Post & { className: string }

const BlogCard = ({
    title,
    description,
    image,
    className = '',
    tags = ['blog'],
    author,
    authorImage,
    readTime,
    createdAt,
}: BlogCardProps) => {
    return (
        <div
            className={`flex flex-col overflow-hidden rounded-lg shadow-lg drop-shadow-xl ${className}`}
        >
            <div
                className="w-full h-64 bg-coolgray-300"
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
                            <div
                                key={tag}
                                className="hover:underline cursor-pointer text-base shadow-inner py-1 px-2 rounded-lg mx-1 bg-cyan-300 text-gray-600 font-bold"
                            >
                                #{tag}
                            </div>
                        ))}
                    </div>
                    <hr className="my-2" />
                    <div className="text-2xl font-bold py-1">{title}</div>
                    <div className="text-base">{description}</div>
                </div>

                <div className="flex py-5">
                    <img
                        src={authorImage}
                        alt="areyan naaman"
                        className="w-12 h-12 rounded-full"
                    />
                    <div className="mx-2">
                        <div className="text-base font-bold">{author}</div>
                        <div className="text-gray-700">
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
