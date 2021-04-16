import { useEffect, useState } from 'react'
import { FaSun as Sunny, FaMoon as Moon } from 'react-icons/fa'
import { ImSun as Sun } from 'react-icons/im'

interface HeaderProps {
    className?: string
}

interface ToggleModeProps {
    className?: string
}

const ToggleMode = ({ className }: ToggleModeProps) => {
    const [mode, setMode] = useState<'light' | 'dark'>('light')
    useEffect(() => {
        const storedMode = localStorage.getItem('bytesack-mode')
        if (storedMode === 'dark') {
            document.getElementById('body')?.classList.add('dark')
            setMode('dark')
        } else {
            document.getElementById('body')?.classList.remove('dark')
            setMode('light')
        }
        console.log(localStorage.getItem('bytesack-mode'))
    }, [])
    return (
        <div
            className={className}
            onClick={() => {
                if (mode === 'light') {
                    setMode('dark')
                    document.getElementById('body')?.classList.add('dark')
                    localStorage.setItem('bytesack-mode', 'dark')
                } else {
                    setMode('light')
                    document.getElementById('body')?.classList.remove('dark')
                    localStorage.setItem('bytesack-mode', 'light')
                }
            }}
        >
            <div className="border-2 rounded-lg mx-5 p-1 border-gray-400 dark:border-gray-200 text-gray-600 dark:text-gray-400 cursor-pointer">
                {mode === 'dark' && (
                    <Sun size="24" className="text-yellow-400" />
                )}
                {mode === 'light' && (
                    <Moon size="22" className="text-blue-900" />
                )}
            </div>
        </div>
    )
}

const Header = ({ className }: HeaderProps) => {
    return (
        <header className={className}>
            <div className="flex items-center justify-between border-b font-nunito bg-light dark:bg-dark">
                <div className="flex items-center">
                    <div className="px-5 pb-6 pt-5">
                        <span className="text-4xl font-dancing-script font-bold text-gradient bg-gradient-to-r from-pink-600 dark:from-pink-400 via-red-400 to-yellow-500 bg-clip-text text-transparent">
                            bytesack
                        </span>
                    </div>
                    <ul className="flex items-center text-lg font-bold text-gray-600 dark:text-gray-300">
                        <li className="px-2 py-6 hover:text-pink-500">Home</li>
                        <li className="px-2 py-6 hover:text-pink-500">
                            Services
                        </li>
                        <li className="px-2 py-6 hover:text-pink-500">
                            Resquest form
                        </li>
                    </ul>
                </div>
                <ToggleMode />
            </div>
        </header>
    )
}

export default Header
