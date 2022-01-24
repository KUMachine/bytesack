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
                className="mx-0.5 cursor-pointer text-gray-600 dark:text-gray-200"
                onClick={() => setToggle(!toggle)}
            >
                <MenuIcon size="36" />
            </div>
            {toggle && (
                <div
                    className="animate__animated animate__fadeIn fixed top-0 right-0 z-40 h-screen w-full bg-gray-600 bg-opacity-70 px-2 py-4"
                    onClick={(e) => {
                        setToggle(!toggle)
                    }}
                >
                    <div
                        className="animate__animated animate__fadeInDown h-auto w-full rounded-lg bg-light p-3 shadow-lg dark:bg-dark-blue"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div
                            className="cursor-pointer text-gray-500 dark:text-gray-400"
                            onClick={() => setToggle(!toggle)}
                        >
                            <CrossIcon size="28" />
                        </div>
                        <div className="my-3 space-y-3 text-xl font-bold text-gray-500 dark:text-gray-400">
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
