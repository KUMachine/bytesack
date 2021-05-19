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
import ServiceCard from './ServiceCard'

interface BannerProps {}

const Services = ({}: BannerProps) => {
    const { t } = useTranslation(['home'])
    return (
        <div className="w-full px-3 py-10 bg-light dark:bg-dark">
            <h2 className="text-3xl font-bold text-center text-coolgray-700">
                What we do?
            </h2>
            <h3 className="pb-4 text-lg font-semibold text-center text-coolgray-500">
                Bytesack provides all kinds of software and technology services
                including:
            </h3>
            <div className="px-3 md:px-5 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <ServiceCard
                    title="Web Design"
                    description="Modern web layout and components design that make your website look great."
                    image={<Monitor size={32} />}
                />
                <ServiceCard
                    title="Web Development"
                    description="Roubust website backend services and API's."
                    image={<Server size={32} />}
                />
                <ServiceCard
                    title="Database"
                    description="Latest database technologies to maintain and store your data and information."
                    image={<Database size={32} />}
                />
                <ServiceCard
                    title="Cloud platform"
                    description="Hosting and managing your web applications on cloud platforms to provide highly available and easy to access application."
                    image={<Cloud size={32} />}
                />
                <ServiceCard
                    title="Security"
                    description="Using security protocols like https and other algorithms to protect your data and your clients."
                    image={<Shield size={32} />}
                />
                <ServiceCard
                    title="Performance"
                    description="Optimizing your applications to perform at the heighest speed possible."
                    image={<Zap size={32} />}
                />
                <ServiceCard
                    title="Dark Mode"
                    description="Providing Dark/Light mode to make your app more convinient to the users."
                    image={<Moon size={32} />}
                />
                <ServiceCard
                    title="Internationalize"
                    description="Having diffrent languages in your application influences more users from diffrent nations toward your business."
                    image={<Globe size={32} />}
                />
            </div>
        </div>
    )
}

export default Services
