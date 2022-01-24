import { useTranslation } from 'react-i18next'

interface BannerProps {}

const Banner = ({}: BannerProps) => {
    const { t } = useTranslation(['home'])
    return (
        <div className="w-full border-gray-200 bg-gradient-to-b from-lightblue-200 to-lightblue-500 px-3 dark:from-dark dark:to-dark">
            <div className="container mx-auto flex flex-col-reverse items-center md:flex md:flex-row">
                <div className="mx-auto w-full py-4 text-center sm:px-10 md:w-1/2 md:px-6 md:text-left">
                    <h1 className="max-w-4xl text-2xl font-black text-coolgray-700 dark:text-gray-200 md:text-3xl lg:text-4xl">
                        {t('MainHeader')}
                    </h1>
                    <h2 className="text-base text-gray-600 dark:text-coolgray-300 md:text-lg">
                        {t('MainDescription')}
                    </h2>
                </div>
                <div className="mx-auto w-full py-4 md:w-1/2">
                    <img
                        src="/banner-illustration.webp"
                        alt="bytesack banner page build image"
                        className="mx-auto w-4/5 md:w-full"
                    />
                </div>
            </div>
        </div>
    )
}

export default Banner
