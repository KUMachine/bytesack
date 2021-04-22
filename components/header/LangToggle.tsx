import { useState } from 'react'
import Dropdown from 'antd/lib/dropdown'
import { RiEarthLine as LangIcon } from 'react-icons/ri'
import Link from 'next/link'

import '../../node_modules/antd/dist/antd.css'
import { useRouter } from 'next/dist/client/router'

interface LangToggleProps {
    className?: string
}

const LangToggle = ({ className }: LangToggleProps) => {
    const { pathname, locale } = useRouter()
    return (
        <div className={className}>
            <Dropdown
                placement="bottomCenter"
                overlay={
                    <div className="bg-gray-300 dark:bg-gray-600 shadow-md rounded-md">
                        <ul className="text-sm font-nunito font-bold text-center">
                            <li className="px-2 py-1 border-b border-lightblue-900 dark:border-gray-400 font-amiri">
                                <Link href={pathname} locale="ku">
                                    <a
                                        className={`${
                                            locale === 'ku'
                                                ? 'text-lightblue-500'
                                                : 'text-gray-700 dark:text-gray-300'
                                        }`}
                                    >
                                        کوردی
                                    </a>
                                </Link>
                            </li>
                            <li className="px-2 py-1">
                                <Link href={pathname} locale="en">
                                    <a
                                        className={`${
                                            locale === 'en'
                                                ? 'text-lightblue-500'
                                                : 'text-gray-700 dark:text-gray-300'
                                        }`}
                                    >
                                        English
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                }
                trigger={['click']}
            >
                <div className="text-sm bg-gray-300 dark:bg-gray-600 overflow-hidden hover:shadow-md p-1 border rounded-lg border-gray-400 dark:border-gray-500 text-gray-600 dark:text-gray-300 cursor-pointer">
                    {<LangIcon size="20" />}
                </div>
            </Dropdown>
        </div>
    )
}

export default LangToggle
