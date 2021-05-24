import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import axios from 'axios'
import Cookie from 'js-cookie'
import { GetServerSideProps } from 'next'
import userAuth from '../utils/userAuth'

export const getServerSideProps: GetServerSideProps = async (context) => {
    const user = userAuth(context.req.cookies['bytesack-auth-token'])
    if (user) {
        return {
            redirect: {
                destination: '/',
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
    const [error, setError] = useState<string>('')
    const [loading, setLoading] = useState<boolean>(false)

    const router = useRouter()

    return (
        <div>
            <Head>
                <title>Bytesack - Login</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="h-screen bg-light container mx-auto">
                <div className="pt-20">
                    <form
                        className="mx-auto px-3 max-w-sm sm:max-w-lg md:max-w-xl relative z-10"
                        onSubmit={async (e) => {
                            e.preventDefault()
                            try {
                                setLoading(true)
                                const result = await axios.post('/api/signin', {
                                    email,
                                    password,
                                })
                                Cookie.set(
                                    'bytesack-auth-token',
                                    result.data.token
                                )
                                setError('')
                                router.reload()
                            } catch (error) {
                                error.response && error.response.data.error
                                    ? setError(error.response.data.error)
                                    : setError('Invalid email or password')
                            }
                            setLoading(false)
                        }}
                    >
                        <div className="relative text-center mb-10">
                            <span className="text-4xl font-pacifico font-semibold text-gray-700 dark:text-gray-300">
                                Bytesack
                            </span>
                        </div>
                        <div className="relative">
                            <input
                                x-ref="email"
                                aria-label="Email address"
                                name="email"
                                type="email"
                                required
                                className="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-full px-3 py-2 border border-transparent shadow ring-1 sm:text-sm mb-4 focus:border-pink-400 focus:ring-pink-400 focus:outline-none"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <div className="relative">
                                <input
                                    x-ref="password"
                                    aria-label="Password"
                                    name="password"
                                    type="password"
                                    required
                                    className="text-gray-900 ring-gray-900 ring-opacity-5 placeholder-gray-400 appearance-none bg-white rounded-md block w-full px-3 py-2 border border-transparent shadow ring-1 sm:text-sm mb-6 focus:border-pink-400 focus:ring-pink-400 focus:outline-none"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                />
                                <button
                                    type="submit"
                                    className="block w-full py-2 px-3 border border-transparent rounded-md text-white font-medium bg-gray-700 shadow-sm sm:text-sm hover:bg-gray-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-50"
                                >
                                    Sign in to account
                                </button>
                                <div>error:{error}</div>
                                <div>loading:{loading}</div>
                            </div>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}
