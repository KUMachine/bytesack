import {
    Cloud,
    Database,
    Globe,
    Monitor,
    Moon,
    Server,
    Shield,
    Zap,
} from 'react-feather'
import { useTranslation } from 'react-i18next'
import serviceDataList from './service-data-list'
import ServiceCard from './ServiceCard'

interface ServicesProps {}

const Services = ({}: ServicesProps) => {
    const { t } = useTranslation(['home'])
    return (
        <div className="bg-light dark:bg-dark-blue">
            <div className="w-full px-3 py-10 container mx-auto">
                <div className="mx-5">
                    <h2 className="text-3xl font-bold text-coolgray-600 dark:text-coolgray-200">
                        What we do?
                    </h2>
                    <h3 className="pb-4 text-lg text-coolgray-500 dark:text-coolgray-300">
                        Bytesack provides all kinds of software and technology
                        services including:
                    </h3>
                </div>
                <div className="lg:px-3 md:px-5 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {serviceDataList.map(
                        ({ title, description, icon, className }) => (
                            <ServiceCard
                                key={title}
                                title={title}
                                description={description}
                                icon={icon}
                                className={className}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default Services
