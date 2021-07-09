import Image from 'next/image'
import { GitHub, Facebook, Instagram, Twitter, Dribbble } from 'react-feather'
const Footer = () => {
    return (
        <div className="text-lg md:text-base border-t border-gray-300 dark:border-gray-600 bg-light dark:bg-dark text-gray-300">
            <div className="container mx-auto px-3 py-10 text-gray-500">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
                    <div className="col-span-2">
                        <div>
                            <Image
                                className="filter dark:grayscale"
                                src="/bytesack-logo-simple.svg"
                                alt="bytesack-logo"
                                height="100"
                                width="100"
                            />
                        </div>
                        <div className="mb-8 max-w-lg text-xl md:text-lg">
                            Building better better software, and solving
                            problems with modern technology.
                        </div>
                        <div className="flex space-x-5">
                            <Facebook size="32" />
                            <Instagram size="32" />
                            <GitHub size="32" />
                            <Twitter size="32" />
                            <Dribbble size="32" />
                        </div>
                    </div>
                    <div className="capitalize leading-10 grid grid-cols-2 md:grid-cols-4 gap-3 pt-3 col-span-3">
                        <div>
                            <div className="uppercase font-bold">solutions</div>
                            <div>marketing</div>
                            <div>analytics</div>
                            <div>commerce</div>
                            <div>insights</div>
                        </div>
                        <div>
                            <div className="uppercase font-bold">support</div>
                            <div>about</div>
                            <div>blog</div>
                            <div>jobs</div>
                            <div>press</div>
                            <div>partners</div>
                        </div>
                        <div className="truncate">
                            <div className="uppercase font-bold">company</div>
                            <div>pricing</div>
                            <div>documentation</div>
                            <div>guides</div>
                            <div>API Status</div>
                        </div>
                        <div>
                            <div className="uppercase font-bold">legal</div>
                            <div>claim</div>
                            <div>privacy</div>
                            <div>terms</div>
                        </div>
                    </div>
                </div>
                <hr className="my-10 dark:border-gray-600" />
                <div className="text-base text-center">
                    &copy; 2020 Bytesack, Inc, All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer
