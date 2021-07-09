import Image from 'next/image'
const SplashLoading = () => {
    return (
        <div className="bg-gray-600 flex top-0 left-0 fixed bg-opacity-80 h-screen w-screen z-50">
            <span className="m-auto text-center text-white">
                <div>
                    <Image
                        className="filter dark:contrast-200 animate-pulse"
                        src="/bytesack-logo-simple.svg"
                        alt="bytesack-logo"
                        height="100"
                        width="100"
                    />
                </div>
            </span>
        </div>
    )
}

export default SplashLoading
