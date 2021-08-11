import axios, { AxiosError, AxiosResponse } from 'axios'
import DarkModeToggle from 'components/header/DarkModeToggle'
import { Loader } from 'react-feather'
import { Dispatch, SetStateAction, useState } from 'react'
import Cookie from 'js-cookie'
import { NextRouter, useRouter } from 'next/router'
import { GetServerSideProps } from 'next'
import useAuth from 'utils/useAuth'

function requestLogin(
    email: string,
    password: string,
    setLoading: Dispatch<SetStateAction<boolean>>,
    setError: Dispatch<SetStateAction<string>>,
    router: NextRouter
) {
    setError('')
    setLoading(true)
    axios
        .post('/api/signin', {
            email,
            password,
        })
        .then(function (response: AxiosResponse) {
            console.log(response.data.token)
            const token = response.data.token
            Cookie.set('bytesack-jwt-token', token)
            setLoading(false)
            router.reload()
        })
        .catch(function (error: AxiosError) {
            const message = error.response?.data?.message
            setError(message)
            setLoading(false)
        })
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const user = useAuth(context.req.cookies['bytesack-jwt-token'])
    if (user) {
        return {
            redirect: {
                destination: '/dashboard',
                permanent: false,
            },
        }
    }
    return {
        props: {},
    }
}

export default function Login() {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const router = useRouter()

    return (
        <>
            <div className=" absolute top-5 right-3">
                <DarkModeToggle />
            </div>
            <div className=" z-0 min-h-screen flex items-center justify-center bg-snow dark:bg-dark-blue py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8 -mt-36">
                    <div>
                        <img
                            className="mx-auto h-24 w-auto filter contrast-200"
                            src="/bytesack-logo-simple.svg"
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-light">
                            Sign in to your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600 dark:text-light">
                            Or{' '}
                            <a
                                href="#"
                                className="font-medium text-lightblue-600 hover:text-lightblue-500 dark:text-lightblue-300"
                            >
                                request for a member account
                            </a>
                        </p>
                    </div>
                    <form
                        className="mt-8 space-y-6"
                        onSubmit={(e) => {
                            e.preventDefault()
                            requestLogin(
                                email,
                                password,
                                setLoading,
                                setError,
                                router
                            )
                        }}
                        onChange={() => setError('')}
                    >
                        <input
                            type="hidden"
                            name="remember"
                            defaultValue="true"
                        />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label
                                    htmlFor="email-address text-2xl"
                                    className="sr-only"
                                >
                                    Email address
                                </label>
                                <input
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    id="email-address"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Email address"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    value={password}
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Password"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label
                                    htmlFor="remember-me"
                                    className="ml-2 block text-sm text-gray-900 dark:text-light"
                                >
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a
                                    href="#"
                                    className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-purple-300"
                                >
                                    Don't have an account ?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="relative group w-full justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span>Sign in</span>
                                {loading && (
                                    <span className="animate-spin absolute right-2">
                                        <Loader size="18" />
                                    </span>
                                )}
                            </button>
                            {error && (
                                <p className="my-0.5 mx-1 text-red-500 dark:text-red-300">
                                    {error}
                                </p>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
