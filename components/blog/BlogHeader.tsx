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
        <div className="space-y-3 pt-5 text-center">
            <span className="text-base uppercase text-gray-600 dark:text-gray-300">
                {date}
            </span>
            <h1 className="mx-auto max-w-3xl text-4xl font-black text-dark-blue dark:text-rice md:text-6xl">
                {title}
            </h1>
            <div className="flex flex-wrap justify-center text-lg" dir="ltr">
                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="mx-1 cursor-pointer font-bold text-purple-400 hover:underline"
                    >
                        #{tag}
                    </span>
                ))}
            </div>
            <div className="flex justify-center py-5">
                <Image
                    src={author.image}
                    alt="areyan naaman"
                    height="50"
                    width="50"
                    className="rounded-full shadow-sm"
                />
                <div className="mx-2 text-justify text-dark dark:text-snow">
                    <div className="text-base font-bold">{author.name}</div>
                    <div>@{author.username}</div>
                </div>
            </div>
            <div className="mx-auto max-w-3xl py-4 text-lg font-semibold text-dark-blue dark:text-light md:text-2xl">
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
