import Image from 'next/image'
interface ServiceCardProps {
    title: string
    description: string
    image: string | JSX.Element
}

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
    return (
        <div className="sm:flex items-center p-3 rounded-lg text-center md:text-left shadow bg-gray-200">
            <div className="rounded-full p-3 bg-opacity-70 bg-lightblue-300 text-gray-800 border border-gray-400 inline-block sm:self-center">
                {image}
            </div>
            <div className="p-2">
                <div className="my-2 text-xl font-bold inline-block border-b border-lightblue-400">
                    {title}
                </div>
                <div className="text-sm">{description}</div>
            </div>
        </div>
    )
}

export default ServiceCard
