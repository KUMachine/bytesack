import { useTranslation } from 'react-i18next'
import BlogCard from './BlogCard'

interface BlogListProps {
    className?: string
}

const BlogList = ({ className }: BlogListProps) => {
    const { t } = useTranslation(['home'])
    return (
        <div className={`bg-light ${className}`}>
            <div className="w-full px-3 py-10 container mx-auto">
                <h2 className="text-3xl font-bold text-center text-coolgray-700">
                    Blog Posts
                </h2>
                <hr className="my-5 mx-auto" />
                <div className="lg:px-3 md:px-5 grid gap-4 lg:gap-6 xl:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    <BlogCard
                        title="Web Design"
                        description="Neque porro quisquam del toba lockin dati thok tormoi clotins thosca damori tomia est qui dolorem ratel bostai soliac mozate ipsum quia dolor sit amet, consectetur, adipisci velit..."
                        image="https://picsum.photos/id/29/600/900.webp"
                        className="bg-light"
                        author="Areyan Naaman"
                        authorImage="https://i.pravatar.cc/300?img=48"
                        date="Mar 15, 2021"
                        readingTime="6"
                        tag="Technology - web"
                        tagColor="red"
                    />
                    <BlogCard
                        title="Web Design"
                        description="Neque porro quisquam del toba lockin dati thok tormoi clotins thosca damori tomia est qui dolorem ratel bostai soliac mozate ipsum quia dolor sit amet, consectetur, adipisci velit..."
                        image="https://picsum.photos/id/22/600/900.webp"
                        className="bg-light"
                        author="Areyan Naaman"
                        authorImage="https://i.pravatar.cc/300?img=28"
                        date="Mar 15, 2021"
                        readingTime="6"
                        tag="Technology - web"
                        tagColor="red"
                    />
                    <BlogCard
                        title="Web Design"
                        description="Neque porro quisquam del toba lockin dati thok tormoi clotins thosca damori tomia est qui dolorem ratel bostai soliac mozate ipsum quia dolor sit amet, consectetur, adipisci velit..."
                        image="https://picsum.photos/id/23/600/900.webp"
                        className="bg-light"
                        author="Areyan Naaman"
                        authorImage="https://i.pravatar.cc/300?img=38"
                        date="Mar 15, 2021"
                        readingTime="6"
                        tag="Technology - web"
                        tagColor="red"
                    />
                    <BlogCard
                        title="Web Design"
                        description="Neque porro quisquam del toba lockin dati thok tormoi clotins thosca damori tomia est qui dolorem ratel bostai soliac mozate ipsum quia dolor sit amet, consectetur, adipisci velit..."
                        image="https://picsum.photos/id/24/600/900.webp"
                        className="bg-light"
                        author="Areyan Naaman"
                        authorImage="https://i.pravatar.cc/300?img=58"
                        date="Mar 15, 2021"
                        readingTime="6"
                        tag="Technology - web"
                        tagColor="red"
                    />
                    <BlogCard
                        title="Web Design"
                        description="Neque porro quisquam del toba lockin dati thok tormoi clotins thosca damori tomia est qui dolorem ratel bostai soliac mozate ipsum quia dolor sit amet, consectetur, adipisci velit..."
                        image="https://picsum.photos/id/25/600/900.webp"
                        className="bg-light"
                        author="Areyan Naaman"
                        authorImage="https://i.pravatar.cc/300?img=45"
                        date="Mar 15, 2021"
                        readingTime="6"
                        tag="Technology - web"
                        tagColor="red"
                    />
                    <BlogCard
                        title="Web Design"
                        description="Neque porro quisquam del toba lockin dati thok tormoi clotins thosca damori tomia est qui dolorem ratel bostai soliac mozate ipsum quia dolor sit amet, consectetur, adipisci velit..."
                        image="https://picsum.photos/id/26/600/900.webp"
                        className="bg-light"
                        author="Areyan Naaman"
                        authorImage="https://i.pravatar.cc/300?img=55"
                        date="Mar 15, 2021"
                        readingTime="6"
                        tag="Technology - web"
                        tagColor="red"
                    />
                </div>
            </div>
        </div>
    )
}

export default BlogList
