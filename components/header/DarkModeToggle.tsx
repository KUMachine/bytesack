import { RiSunFill as Sun, RiMoonFill as Moon } from 'react-icons/ri'
import { useState, useEffect } from 'react'

import '../../node_modules/animate.css/animate.css'

interface DarkModeToggleProps {
    className?: string
}

const DarkModeToggle = ({ className }: DarkModeToggleProps) => {
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
            <div className=" overflow-hidden p-1 border-2 rounded-full border-gray-600 dark:border-gray-400 text-gray-600 dark:text-gray-400 cursor-pointer">
                {mode === 'dark' && (
                    <Sun
                        size="21"
                        className="text-yellow-300 animate__animated animate__fadeInUp"
                    />
                )}
                {mode === 'light' && (
                    <Moon
                        size="20"
                        className="text-lightblue-600 animate__animated animate__fadeInDown"
                    />
                )}
            </div>
        </div>
    )
}

export default DarkModeToggle
