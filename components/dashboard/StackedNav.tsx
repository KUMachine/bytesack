import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import {
    FaBell as BellIcon,
    FaList as MenuIcon,
    FaTimes as XIcon,
} from 'react-icons/fa'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { User } from '@prisma/client'

const navigation = ['dashboard', 'users', 'blog', 'statistics']
const profile = ['Your Profile', 'Settings']

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

interface StackedNavProps {
    active: string
    user: Pick<User, 'username' | 'avatar'>
}

export default function StackedNav({ active, user }: StackedNavProps) {
    const router = useRouter()
    return (
        <>
            <Disclosure as="nav" className="bg-dark-blue">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-between h-16">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-12 w-12 contrast-200"
                                            src="/bytesack-logo-simple.svg"
                                            alt="bytesack"
                                        />
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-10 flex items-baseline space-x-4 capitalize font-bold text-base">
                                            {navigation.map((item) =>
                                                item === active ? (
                                                    <Fragment key={item}>
                                                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                                        <a
                                                            href="#"
                                                            className="bg-gray-900 text-white px-3 py-2 rounded-md"
                                                        >
                                                            {item}
                                                        </a>
                                                    </Fragment>
                                                ) : (
                                                    <a
                                                        key={item}
                                                        href={`/dashboard/${
                                                            item === 'dashboard'
                                                                ? ''
                                                                : item
                                                        }`}
                                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md"
                                                    >
                                                        {item}
                                                    </a>
                                                )
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-4 flex items-center md:ml-6">
                                        <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            <span className="sr-only">
                                                View notifications
                                            </span>
                                            <BellIcon
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        </button>

                                        {/* Profile dropdown */}
                                        <Menu
                                            as="div"
                                            className="ml-3 relative"
                                        >
                                            {({ open }) => (
                                                <>
                                                    <div>
                                                        <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                            <span className="sr-only">
                                                                Open user menu
                                                            </span>
                                                            <img
                                                                className="h-8 w-8 rounded-full"
                                                                src={
                                                                    user.avatar
                                                                }
                                                                alt=""
                                                            />
                                                        </Menu.Button>
                                                    </div>
                                                    <Transition
                                                        show={open}
                                                        as={Fragment}
                                                        enter="transition ease-out duration-100"
                                                        enterFrom="transform opacity-0 scale-95"
                                                        enterTo="transform opacity-100 scale-100"
                                                        leave="transition ease-in duration-75"
                                                        leaveFrom="transform opacity-100 scale-100"
                                                        leaveTo="transform opacity-0 scale-95"
                                                    >
                                                        <Menu.Items
                                                            static
                                                            className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                                                        >
                                                            <Menu.Item>
                                                                <a
                                                                    href="/dashboard/profile"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                                                >
                                                                    Your Profile
                                                                </a>
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                <a
                                                                    href="/dashboard/settings"
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                                                >
                                                                    Settings
                                                                </a>
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                <a
                                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                                                    onClick={(
                                                                        e
                                                                    ) => {
                                                                        e.preventDefault()
                                                                        Cookies.remove(
                                                                            'bytesack-jwt-token'
                                                                        )
                                                                        router.reload()
                                                                    }}
                                                                >
                                                                    Sign out
                                                                </a>
                                                            </Menu.Item>
                                                        </Menu.Items>
                                                    </Transition>
                                                </>
                                            )}
                                        </Menu>
                                    </div>
                                </div>
                                <div className="-mr-2 flex md:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                        <span className="sr-only">
                                            Open main menu
                                        </span>
                                        {open ? (
                                            <XIcon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        ) : (
                                            <MenuIcon
                                                className="block h-6 w-6"
                                                aria-hidden="true"
                                            />
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 capitalize font-medium text-base">
                                {navigation.map((item) =>
                                    item === active ? (
                                        <Fragment key={item}>
                                            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                            <a
                                                href="#"
                                                className="bg-gray-900 text-white block px-3 py-2 rounded-md"
                                            >
                                                {item}
                                            </a>
                                        </Fragment>
                                    ) : (
                                        <a
                                            key={item}
                                            href={`/dashboard/${
                                                item === 'dashboard' ? '' : item
                                            }`}
                                            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md"
                                        >
                                            {item}
                                        </a>
                                    )
                                )}
                            </div>
                            <div className="pt-4 pb-3 border-t border-gray-700">
                                <div className="flex items-center px-5">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-10 w-10 rounded-full"
                                            src={user.avatar}
                                            alt="avatar"
                                        />
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium leading-none text-white">
                                            Tom Cook
                                        </div>
                                        <div className="text-sm font-medium leading-none text-gray-400">
                                            tom@example.com
                                        </div>
                                    </div>
                                    <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                        <span className="sr-only">
                                            View notifications
                                        </span>
                                        <BellIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                                <div className="mt-3 px-2 space-y-1">
                                    <a
                                        href="/dashboard/profile"
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                    >
                                        Your Profile
                                    </a>
                                    <a
                                        href="/dashboard/profile"
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                    >
                                        Settings
                                    </a>
                                    <a
                                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            Cookies.remove('bytesack-jwt-token')
                                        }}
                                    >
                                        Sign out
                                    </a>
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <header className="bg-purple-200 shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-purple-900 capitalize">
                        {active}
                    </h1>
                </div>
            </header>
        </>
    )
}
