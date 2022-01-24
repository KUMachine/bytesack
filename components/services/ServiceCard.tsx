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
            className={`${className} mx-2 transform cursor-pointer items-center rounded-lg p-5 shadow transition duration-300 hover:scale-105 md:mx-0`}
        >
            <div className="mx-2 inline-block rounded-2xl bg-light bg-opacity-70 p-3 text-gray-800 sm:self-center">
                {icon}
            </div>
            <div className="p-2 text-gray-800">
                <div className="my-2 inline-block text-2xl font-bold">
                    {title}
                </div>
                <div className="text-base">{description}</div>
            </div>
        </div>
    )
}

export default ServiceCard
