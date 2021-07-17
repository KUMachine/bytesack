import { useState } from 'react'
import { HiMenuAlt4 as MenuIcon } from 'react-icons/hi'
import { FaTimes as CrossIcon } from 'react-icons/fa'
import Link from 'next/link'

import '../../node_modules/animate.css/animate.css'

interface HamburgerProps {
    className?: string
}

const Hamburger = ({ className }: HamburgerProps) => {
    const [toggle, setToggle] = useState<boolean>(false)
    return (
        <div className={className}>
            <div
                className="mx-0.5 text-gray-600 dark:text-gray-200 cursor-pointer"
                onClick={() => setToggle(!toggle)}
            >
                <MenuIcon size="36" />
            </div>
            {toggle && (
                <div
                    className="fixed h-screen w-full z-40 bg-gray-600 bg-opacity-70 px-2 py-4 top-0 right-0 animate__animated animate__fadeIn"
                    onClick={(e) => {
                        setToggle(!toggle)
                    }}
                >
                    <div
                        className="bg-light dark:bg-dark-blue p-3 h-auto w-full rounded-lg shadow-lg animate__animated animate__fadeInDown"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div
                            className="text-gray-500 dark:text-gray-400 cursor-pointer"
                            onClick={() => setToggle(!toggle)}
                        >
                            <CrossIcon size="28" />
                        </div>
                        <div className="my-3 text-xl font-bold text-gray-500 dark:text-gray-400 space-y-3">
                            <Link href="/">
                                <a className="block border-b border-gray-500 px-1 py-0.5">
                                    Home
                                </a>
                            </Link>
                            <Link href="/services">
                                <a className="block border-b border-gray-500 px-1 py-0.5">
                                    Services
                                </a>
                            </Link>
                            <Link href="/blog">
                                <a className="block border-b border-gray-500 px-1 py-0.5">
                                    Blog
                                </a>
                            </Link>
                            <Link href="/about">
                                <a className="block border-b border-gray-500 px-1 py-0.5">
                                    About
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Hamburger
