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
            <h2 className="text-3xl font-bold dark:text-gray-300 md:text-4xl">
                {title}
            </h2>
            <p className="m-0 text-lg">{description}</p>
        </section>
    )
}

export default ServiceSection
