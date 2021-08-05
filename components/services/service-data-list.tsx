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

interface ServiceData {
    title: string
    shortText?: string
    description: string
    icon: JSX.Element
    className: string | undefined
}

const serviceDataList: ServiceData[] = [
    {
        title: 'Web Design',
        description:
            'Modern web layout and components design that make your website look great.',
        icon: <Monitor size={32} />,
        className: 'bg-gradient-to-br from-pink-300 to-pink-500',
    },
    {
        title: 'Web Development',
        description: "Roubust website backend services and API's.",
        icon: <Server size={32} />,
        className: 'bg-gradient-to-br from-lime-300 to-lime-500',
    },
    {
        title: 'Database',
        description:
            'Latest database technologies to maintain and store your data and information.',
        icon: <Database size={32} />,
        className: 'bg-gradient-to-br from-blue-300 to-blue-500',
    },
    {
        title: 'Cloud platform',
        description:
            'Hosting and managing your web applications on cloud platforms to provide highly available and easy to access application.',
        icon: <Cloud size={32} />,
        className: 'bg-gradient-to-br from-yellow-300 to-yellow-500',
    },
    {
        title: 'Security',
        description:
            'Using security protocols like https and other algorithms to protect your data and your clients.',
        icon: <Shield size={32} />,
        className: 'bg-gradient-to-br from-emerald-300 to-emerald-500',
    },
    {
        title: 'Performance',
        description:
            'Optimizing your applications to perform at the heighest speed possible.',
        icon: <Zap size={32} />,
        className: 'bg-gradient-to-br from-cyan-300 to-cyan-500',
    },
    {
        title: 'Dark Mode',
        description:
            'Providing Dark/Light mode to make your app more convinient to the users.',
        icon: <Moon size={32} />,
        className: 'bg-gradient-to-br from-rose-300 to-rose-500',
    },
    {
        title: 'Internationalize',
        description:
            'Having diffrent languages in your application influences more users from diffrent nations toward your business.',
        icon: <Globe size={32} />,
        className: 'bg-gradient-to-br from-purple-300 to-purple-500',
    },
]

export default serviceDataList
