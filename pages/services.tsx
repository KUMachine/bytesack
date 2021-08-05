import Footer from 'components/Footer'
import ServiceSection from 'components/services/ServiceSection'
import serviceDataList from 'components/services/service-data-list'
import Header from '../components/header/Header'

const ServicesPage = () => {
    return (
        <>
            <Header className="sticky top-0 z-30" />
            <div className="w-full bg-snow dark:bg-dark-blue text-gray-700 dark:text-gray-400">
                <div className="container mx-auto px-2">
                    <div className="lg:text-center pt-10">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
                            bytesack
                        </h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
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
