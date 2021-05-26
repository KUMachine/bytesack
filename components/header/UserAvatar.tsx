import { useState } from 'react'
import Dropdown from 'antd/lib/dropdown'
import { RiUser3Fill as UserIcon } from 'react-icons/ri'
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
            <div className="bg-pink-100 border border-gray-300 dark:bg-gray-600 shadow-md rounded-md">
                <ul className="text-sm font-nunito font-bold text-center pt-3">
                    <li className="px-3">
                        <Link href="/profile/me">
                            <a className="text-gray-700 dark:text-gray-300 font-nunito">
                                Profile
                            </a>
                        </Link>
                    </li>
                    <li
                        className="px-2"
                        onClick={() => {
                            Cookies.remove('bytesack-auth-token')
                            router.reload()
                        }}
                    >
                        <Link href="/login">
                            <a className="text-gray-700 dark:text-gray-300 font-nunito">
                                logout
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    } else {
        overlay = (
            <div className="bg-pink-100 border border-gray-300 dark:bg-gray-600 shadow-md rounded-md">
                <ul className="text-sm font-nunito font-bold text-center">
                    <li className="px-2 py-1">
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
            <Dropdown overlay={overlay} trigger={['click']}>
                <div className="text-sm overflow-hidden hover:shadow-md border-2 rounded-full border-gray-300 dark:border-gray-400 text-gray-600 dark:text-gray-300 cursor-pointer">
                    {user ? (
                        <div className="p-1 text-lime-500">
                            <UserIcon size="20" />
                        </div>
                    ) : (
                        <div className="p-1">
                            <UserIcon size="20" />
                        </div>
                    )}
                </div>
            </Dropdown>
        </div>
    )
}

export default UserAvatar
