import { User } from '.prisma/client'
import { useState } from 'react'

interface PersonalInfoFormProps {
    user: Pick<User, 'firstname' | 'lastname' | 'username' | 'email'>
}

export default function PersonalInfoForm({ user }: PersonalInfoFormProps) {
    const [firstname, setFirstname] = useState(user.firstname)
    const [lastname, setLastname] = useState(user.lastname)
    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email)
    return (
        <form action="#" method="POST" className="mt-4">
            <div className="font-bold mx-1">Personal info:</div>
            <div className="bg-white shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="first-name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                First name
                            </label>
                            <input
                                value={firstname}
                                type="text"
                                name="first-name"
                                id="first-name"
                                autoComplete="given-name"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="last-name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Last name
                            </label>
                            <input
                                value={lastname}
                                type="text"
                                name="last-name"
                                id="last-name"
                                autoComplete="family-name"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="username"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Username
                            </label>
                            <input
                                value={username}
                                type="text"
                                id="username"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="email-address"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email address
                            </label>
                            <input
                                value={email}
                                type="text"
                                name="email-address"
                                id="email-address"
                                autoComplete="email"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                    </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    )
}
