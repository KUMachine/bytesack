interface ServiceCardProps {
    title: string
    description: string
    icon: string | JSX.Element
    className?: string
}

const ServiceCard = ({
    title,
    description,
    icon,
    className = '',
}: ServiceCardProps) => {
    return (
        <div
            className={`${className} items-center p-5 mx-2 md:mx-0 rounded-lg shadow cursor-pointer transform transition hover:scale-105 duration-300`}
        >
            <div className="rounded-2xl mx-2 p-3 bg-opacity-70 bg-light text-gray-800 inline-block sm:self-center">
                {icon}
            </div>
            <div className="p-2 text-gray-800">
                <div className="my-2 text-2xl font-bold inline-block">
                    {title}
                </div>
                <div className="text-base">{description}</div>
            </div>
        </div>
    )
}

export default ServiceCard
