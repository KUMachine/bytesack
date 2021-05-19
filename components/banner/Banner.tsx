import { useTranslation } from 'react-i18next'

interface BannerProps {}

const Banner = ({}: BannerProps) => {
    const { t } = useTranslation(['home'])
    return (
        <div className="w-full px-3 bg-[#f5f4fe] border dark:border-0 border-gray-200 dark:bg-lightblue-900">
            <div className="container mx-auto flex md:flex flex-col-reverse md:flex-row items-center">
                <div className="mx-auto text-center md:text-left py-4 sm:px-10 md:px-0 w-full md:w-1/2">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl text-coolgray-700 dark:text-gray-200 font-black max-w-4xl">
                        {t('MainHeader')}
                    </h1>
                    <h2 className="text-base md:text-lg dark:text-coolgray-300 text-gray-600">
                        {t('MainDescription')}
                    </h2>
                </div>
                <div className="mx-auto py-4 w-full md:w-1/2">
                    <img
                        src="/banner-illustration.webp"
                        alt="bytesack banner page build image"
                        className="w-4/5 md:w-full mx-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default Banner
