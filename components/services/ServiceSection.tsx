interface ServiceSectionProps {
    title: string
    description: string
    icon: string | JSX.Element
    className?: string
    iconClassName?: string
}

const ServiceSection = ({
    title,
    description,
    icon,
    className = '',
    iconClassName = '',
}: ServiceSectionProps) => {
    return (
        <section className="py-10">
            <div
                className={`${iconClassName} inline-block rounded-lg p-3 text-light`}
            >
                {icon}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold dark:text-gray-300">
                {title}
            </h2>
            <p className="text-lg m-0">{description}</p>
        </section>
    )
}

export default ServiceSection
