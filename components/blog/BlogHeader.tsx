import Image from 'next/image'
import Separator from './sections/Separator'
interface BlogHeaderProps {
    title: string
    description: string
    date: string
    image: string
    tags: string[]
    author: Author
}
type Author = {
    name: string
    username: string
    image: string
}
export default function BlogHeader({
    title,
    description,
    image,
    date,
    author,
    tags,
}: BlogHeaderProps) {
    return (
        <div className="text-center pt-5 space-y-3">
            <span className="text-base text-gray-600 dark:text-gray-300 uppercase">
                {date}
            </span>
            <h1 className="text-4xl md:text-6xl font-black max-w-3xl mx-auto text-dark-blue dark:text-rice">
                {title}
            </h1>
            <div className="flex flex-wrap justify-center text-lg" dir="ltr">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="text-purple-400 font-bold mx-1 hover:underline cursor-pointer"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
            <div className="flex py-5 justify-center">
                <Image
                    src={author.image}
                    alt="areyan naaman"
                    height="50"
                    width="50"
                    className="rounded-full shadow-sm"
                />
                <div className="mx-2 text-dark dark:text-snow text-justify">
                    <div className="text-base font-bold">{author.name}</div>
                    <div>@{author.username}</div>
                </div>
            </div>
            <div className="py-4 text-lg md:text-2xl font-semibold max-w-3xl mx-auto text-dark-blue dark:text-light">
                {description}
            </div>
            <Image
                src={image}
                height="400"
                width="800"
                className="bg-gray-200"
            />
            <Separator />
        </div>
    )
}
