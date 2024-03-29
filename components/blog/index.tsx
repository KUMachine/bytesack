import { memo } from 'react'
import Image from 'next/image'
import CodeBlock from './sections/CodeBlock'

interface BlogPostProps {
    data: string
}

const Section = function ({ sectionData }: any) {
    switch (sectionData.type) {
        case 'code':
            return (
                <CodeBlock
                    codeString={sectionData.text}
                    language={sectionData.language}
                />
            )
        case 'image':
            return (
                <img
                    src={sectionData.src}
                    alt={sectionData.alt}
                    className="mx-auto"
                />
            )
        default:
            return <div className="mx-8 py-2 text-lg">{sectionData.text}</div>
    }
}

const BlogPost = function ({ data }: BlogPostProps) {
    const jsonData = JSON.parse(data)
    return (
        <div className="px-3">
            <h1 className="pt-6 pb-2 text-center text-4xl font-bold">
                {jsonData.title}
            </h1>
            <img
                src={jsonData.image}
                alt="set your alt"
                className="mx-auto w-full max-w-4xl"
            />
            <ul>
                {jsonData.body.map((section: any) => {
                    return (
                        <li key={section.seq}>
                            <Section sectionData={section} />
                        </li>
                    )
                })}
            </ul>
            <h2 className="mx-4 py-1 text-xl">{jsonData.date}</h2>
            <h2 className="mx-4 py-1 text-xl capitalize">
                by:&nbsp;{jsonData.author}
                date: {jsonData.data}
            </h2>
        </div>
    )
}

export default memo(BlogPost)
