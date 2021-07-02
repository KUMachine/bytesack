import Image from 'next/image'
interface BlogCardProps {
    title: string
    description: string
    image: string
    className?: string
    tag?: string
    tagColor?: string
    author: string
    authorImage: string
    date: string
    readingTime: string
}

const BlogCard = ({
    title,
    description,
    image,
    className = '',
    tag = 'Blog',
    tagColor = 'purple',
    author,
    authorImage,
    readingTime,
    date,
}: BlogCardProps) => {
    return (
        <div
            className={`flex flex-col overflow-hidden rounded-lg shadow-lg cursor-pointer ${className}`}
        >
            <div
                className="w-full h-64 bg-pink-400"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundClip: 'content-box',
                }}
            ></div>
            <div className="px-8 pt-8 pb-2 flex flex-col justify-between flex-auto">
                <div>
                    <div
                        className="font-bold text-lg py-2"
                        style={{ color: tagColor }}
                    >
                        {tag}
                    </div>
                    <hr />
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
                            {date} - {readingTime} min read
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard
