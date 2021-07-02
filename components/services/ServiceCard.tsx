import Image from 'next/image'
interface ServiceCardProps {
    title: string
    description: string
    image: string | JSX.Element
    className?: string
}

const ServiceCard = ({
    title,
    description,
    image,
    className = '',
}: ServiceCardProps) => {
    return (
        <div
            className={`items-center p-5 mx-2 md:mx-0 rounded-lg text-center shadow cursor-pointer transform transition hover:scale-105 duration-300 ${className}`}
        >
            <div className="rounded-full p-3 bg-opacity-70 bg-lightblue-100 text-gray-800 inline-block sm:self-center">
                {image}
            </div>
            <div className="p-2">
                <div className="my-2 text-2xl font-bold inline-block">
                    {title}
                </div>
                <div className="text-base">{description}</div>
            </div>
        </div>
    )
}

export default ServiceCard
