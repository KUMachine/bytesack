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
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex h-16 items-center justify-between">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <img
                                            className="h-12 w-12 contrast-200"
                                            src="/bytesack-logo-simple.svg"
                                            alt="bytesack"
                                        />
                                    </div>
                                    <div className="hidden md:block">
                                        <div className="ml-10 flex items-baseline space-x-4 text-base font-bold capitalize">
                                            {navigation.map((item) =>
                                                item === active ? (
                                                    <Fragment key={item}>
                                                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                                        <a
                                                            href="#"
                                                            className="rounded-md bg-gray-900 px-3 py-2 text-white"
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
                                                        className="rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
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
                                        <button className="focus:outline-none rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
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
                                            className="relative ml-3"
                                        >
                                            {({ open }) => (
                                                <>
                                                    <div>
                                                        <Menu.Button className="focus:outline-none flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
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
                                                            className="focus:outline-none absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5"
                                                        >
                                                            <Menu.Item>
                                                                <a
                                                                    href="/dashboard/profile"
                                                                    className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                >
                                                                    Your Profile
                                                                </a>
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                <a
                                                                    href="/dashboard/settings"
                                                                    className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                                                >
                                                                    Settings
                                                                </a>
                                                            </Menu.Item>
                                                            <Menu.Item>
                                                                <a
                                                                    className="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
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
                                    <Disclosure.Button className="focus:outline-none inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
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
                            <div className="space-y-1 px-2 pt-2 pb-3 text-base font-medium capitalize sm:px-3">
                                {navigation.map((item) =>
                                    item === active ? (
                                        <Fragment key={item}>
                                            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                            <a
                                                href="#"
                                                className="block rounded-md bg-gray-900 px-3 py-2 text-white"
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
                                            className="block rounded-md px-3 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
                                        >
                                            {item}
                                        </a>
                                    )
                                )}
                            </div>
                            <div className="border-t border-gray-700 pt-4 pb-3">
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
                                    <button className="focus:outline-none ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="sr-only">
                                            View notifications
                                        </span>
                                        <BellIcon
                                            className="h-6 w-6"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>
                                <div className="mt-3 space-y-1 px-2">
                                    <a
                                        href="/dashboard/profile"
                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                    >
                                        Your Profile
                                    </a>
                                    <a
                                        href="/dashboard/profile"
                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                    >
                                        Settings
                                    </a>
                                    <a
                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
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
                <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold capitalize text-purple-900">
                        {active}
                    </h1>
                </div>
            </header>
        </>
    )
}
