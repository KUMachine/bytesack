import { useState } from 'react'
import { HiMenuAlt4 as MenuIcon } from 'react-icons/hi'
import { FaTimes as CrossIcon } from 'react-icons/fa'

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
                <div className="fixed z-40 bg-gray-600 bg-opacity-70 p-2 w-full h-full top-0 right-0 animate__animated animate__fadeIn">
                    <div className="bg-light dark:bg-dark h-1/2 w-full rounded-lg shadow-lg animate__animated animate__fadeInDown">
                        <div
                            className="p-2 text-gray-500 dark:text-gray-400 cursor-pointer"
                            onClick={() => setToggle(!toggle)}
                        >
                            <CrossIcon size="28" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Hamburger
