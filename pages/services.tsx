import Footer from 'components/Footer'
import ServiceSection from 'components/services/ServiceSection'
import serviceDataList from 'components/services/service-data-list'
import Header from '../components/header/Header'

const ServicesPage = () => {
    return (
        <>
            <Header className="sticky top-0 z-30" />
            <div className="w-full bg-snow text-gray-700 dark:bg-dark-blue dark:text-gray-400">
                <div className="container mx-auto px-2">
                    <div className="pt-10 lg:text-center">
                        <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-600">
                            bytesack
                        </h2>
                        <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight sm:text-4xl">
                            A better technology and solutions
                        </p>
                        <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                            Lorem ipsum dolor sit amet consect adipisicing elit.
                            Possimus magnam voluptatum cupiditate veritatis in
                            accusamus quisquam.
                        </p>
                    </div>
                    <div>
                        {serviceDataList.map(
                            ({ title, description, icon, className }) => (
                                <ServiceSection
                                    key={title}
                                    title={title}
                                    description={description}
                                    icon={icon}
                                    iconClassName={className}
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ServicesPage
