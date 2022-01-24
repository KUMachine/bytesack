import Image from 'next/image'
const SplashLoading = () => {
    return (
        <div className="fixed top-0 left-0 z-50 flex h-screen w-screen bg-gray-600 bg-opacity-80">
            <span className="m-auto text-center text-white">
                <div>
                    <Image
                        className="-mt-40 animate-pulse filter dark:contrast-200"
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
