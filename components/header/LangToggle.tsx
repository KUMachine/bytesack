import { Menu, Transition } from '@headlessui/react'
import { Circle, CheckCircle } from 'react-feather'
import { Fragment } from 'react'
import { RiEarthLine as LangIcon } from 'react-icons/ri'
import Link from 'next/link'

import { useRouter } from 'next/dist/client/router'

interface LangToggleProps {
    className?: string
}

// const LangToggle = ({ className }: LangToggleProps) => {
//     const { pathname, locale } = useRouter()
//     return (
//         <div className={className}>
//             <Dropdown
//                 placement="bottomCenter"
//                 overlay={
//                     <div className="bg-gray-300 dark:bg-gray-600 shadow-md rounded-md">
//                         <ul className="text-sm font-nunito font-bold text-center">
//                             <li className="px-2 py-1 border-b border-lightblue-900 dark:border-gray-400 font-amiri">
//                                 <Link href={pathname} locale="ku">
//                                     <a
//                                         className={`${
//                                             locale === 'ku'
//                                                 ? 'text-lightblue-500'
//                                                 : 'text-gray-700 dark:text-gray-300'
//                                         }`}
//                                     >
//
//                                     </a>
//                                 </Link>
//                             </li>
//                             <li className="px-2 py-1">
//                                 <Link href={pathname} locale="en">
//                                     <a
//                                         className={`${
//                                             locale === 'en'
//                                                 ? 'text-lightblue-500'
//                                                 : 'text-gray-700 dark:text-gray-300'
//                                         }`}
//                                     >
//                                         English
//                                     </a>
//                                 </Link>
//                             </li>
//                         </ul>
//                     </div>
//                 }
//                 trigger={['click']}
//             >
//                 <div className="text-sm overflow-hidden p-1 border-2 rounded-full border-gray-600 dark:border-gray-400 text-lightblue-600 dark:text-gray-300 cursor-pointer">
//                     {<LangIcon size="20" />}
//                 </div>
//             </Dropdown>
//         </div>
//     )
// }

export default function LangToggle() {
    const { pathname, locale } = useRouter()
    return (
        <div className="relative">
            <Menu as="div">
                <div>
                    <Menu.Button
                        as="div"
                        className="inline-flex justify-center w-full py-2"
                    >
                        <div className="text-sm overflow-hidden p-1 border-2 rounded-full border-gray-600 dark:border-gray-400 text-lightblue-600 dark:text-gray-300 cursor-pointer">
                            {<LangIcon size="20" />}
                        </div>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        className={`absolute ${
                            locale === 'en' ? 'right-0' : 'left-0'
                        } mt-2 origin-top-right bg-white dark:bg-dark-blue dark:text-gray-300 divide-y divide-gray-100 dark:divide-gray-500 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                    >
                        <div className="px-1 py-1">
                            <Menu.Item>
                                <button className="group flex rounded-md items-center w-full px-2 py-1 text-sm">
                                    {locale === 'en' ? (
                                        <CheckCircle
                                            size="20"
                                            className="mx-1"
                                        />
                                    ) : (
                                        <Circle size="20" className="mx-1" />
                                    )}
                                    <Link href={pathname} locale="en">
                                        <a>English</a>
                                    </Link>
                                </button>
                            </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                            <Menu.Item>
                                <button className="group flex rounded-md items-center w-full px-2 py-1 text-sm">
                                    {locale === 'ku' ? (
                                        <CheckCircle
                                            size="20"
                                            className="mx-1"
                                        />
                                    ) : (
                                        <Circle size="20" className="mx-1" />
                                    )}
                                    <Link href={pathname} locale="ku">
                                        <a>کوردی</a>
                                    </Link>
                                </button>
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

function EditInactiveIcon(props: any) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
        </svg>
    )
}

function EditActiveIcon(props: any) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 13V16H7L16 7L13 4L4 13Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    )
}

function DuplicateInactiveIcon(props: any) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 4H12V12H4V4Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path
                d="M8 8H16V16H8V8Z"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
        </svg>
    )
}

function DuplicateActiveIcon(props: any) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M4 4H12V12H4V4Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path
                d="M8 8H16V16H8V8Z"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
        </svg>
    )
}

function ArchiveInactiveIcon(props: any) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="8"
                width="10"
                height="8"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <rect
                x="4"
                y="4"
                width="12"
                height="4"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function ArchiveActiveIcon(props: any) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="8"
                width="10"
                height="8"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <rect
                x="4"
                y="4"
                width="12"
                height="4"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path d="M8 12H12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function MoveInactiveIcon(props: any) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 4H16V10" stroke="#A78BFA" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function MoveActiveIcon(props: any) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M10 4H16V10" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M16 4L8 12" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6H4V16H14V12" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    )
}

function DeleteInactiveIcon(props: any) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#EDE9FE"
                stroke="#A78BFA"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#A78BFA" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#A78BFA" strokeWidth="2" />
        </svg>
    )
}

function DeleteActiveIcon(props: any) {
    return (
        <svg
            {...props}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="5"
                y="6"
                width="10"
                height="10"
                fill="#8B5CF6"
                stroke="#C4B5FD"
                strokeWidth="2"
            />
            <path d="M3 6H17" stroke="#C4B5FD" strokeWidth="2" />
            <path d="M8 6V4H12V6" stroke="#C4B5FD" strokeWidth="2" />
        </svg>
    )
}
