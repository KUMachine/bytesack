import { useState } from 'react'
import Dropdown from 'antd/lib/dropdown'
import { RiUser3Fill as LangIcon } from 'react-icons/ri'
import Link from 'next/link'

import '../../node_modules/antd/dist/antd.css'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'

interface UserAvatarProps {
    className?: string
    user?: { email: string; role: string }
}

const UserAvatar = ({ className, user }: UserAvatarProps) => {
    const router = useRouter()
    let overlay
    if (user) {
        overlay = (
            <div
                onClick={() => {
                    Cookies.remove('bytesack-auth-token')
                    router.reload()
                }}
            >
                logout
            </div>
        )
    } else {
        overlay = (
            <div className="bg-gray-50 dark:bg-gray-600 shadow-md rounded-md">
                <ul className="text-sm font-nunito font-bold text-center">
                    <li className="px-2 py-1 border-b border-lightblue-900 dark:border-gray-400 font-amiri">
                        <Link href="/login">
                            <a className="text-gray-700 dark:text-gray-300 font-nunito">
                                login
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
    return (
        <div className={className}>
            <Dropdown
                placement="bottomLeft"
                overlay={overlay}
                trigger={['click']}
            >
                <div className="text-sm overflow-hidden hover:shadow-md border-2 rounded-full border-gray-300 dark:border-gray-400 text-gray-600 dark:text-gray-300 cursor-pointer">
                    {user ? (
                        <img
                            src="/default-avatar.jpg"
                            alt="default avatar"
                            className="w-8 h-8"
                        />
                    ) : (
                        <div className="p-1">
                            <LangIcon size="20" />
                        </div>
                    )}
                </div>
            </Dropdown>
        </div>
    )
}

export default UserAvatar
