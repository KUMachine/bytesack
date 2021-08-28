import { Disclosure } from '@headlessui/react'
import { useState } from 'react'
import ImageDropper from '../ImageDropper'
import { X as XIcon } from 'react-feather'
import axios, { AxiosError, AxiosResponse } from 'axios'
import getImageUrl from 'utils/getImageUrl'
import validateBlogPost from 'lib/validations/validateBlogPost'
import { useRouter } from 'next/router'

export default function BlogPostForm() {
    const router = useRouter()

    const [slug, setSlug] = useState<string>('')
    const [title, setTitle] = useState<string>('')
    const [language, setLanguage] = useState<string>('EN')
    const [readTime, setReadTime] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [file, setFile] = useState<string[]>([])
    const [tags, setTags] = useState<string[]>([])
    const [tag, setTag] = useState<string>('')

    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')
    return (
        <form
            method="POST"
            className="mt-4"
            onChange={() => {
                setError('')
            }}
            onSubmit={async (e) => {
                e.preventDefault()
                setLoading(true)
                try {
                    validateBlogPost({
                        slug,
                        title,
                        description,
                        readTime,
                        tags,
                        image: 'http://fakeimage.fake',
                    })
                } catch (error) {
                    setLoading(false)
                    return setError(error)
                }

                const imageUrl = await getImageUrl(file)

                axios
                    .post('/api/blog', {
                        slug,
                        title,
                        language,
                        readTime,
                        description,
                        tags,
                        image: imageUrl,
                    })
                    .then(function (response: AxiosResponse) {
                        console.log({ response })
                        router.reload()
                    })
                    .catch(function (error: AxiosError) {
                        const message = error.response?.data?.message
                        setError(message)
                    })
                setLoading(false)
            }}
        >
            <div className="font-bold mx-1">New Post:</div>
            <div className="bg-white shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-9 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="slug"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Slug
                            </label>
                            <input
                                value={slug}
                                onChange={(e) => setSlug(e.target.value)}
                                type="text"
                                name="slug"
                                id="slug"
                                autoComplete="slug"
                                placeholder="this-is-slug"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="title"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Title
                            </label>
                            <input
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                type="text"
                                name="title"
                                id="title"
                                autoComplete="title"
                                placeholder="post title"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="language"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Language
                            </label>
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                name="language"
                                id="language"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            >
                                <option value="EN">English</option>
                                <option value="KU">Kurdish</option>
                            </select>
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <label
                                htmlFor="readtime"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Time to read (min)
                            </label>
                            <input
                                value={readTime}
                                onChange={(e) => setReadTime(e.target.value)}
                                type="number"
                                name="readtime"
                                id="readtime"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="col-span-6">
                            <label
                                htmlFor="description"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Description
                            </label>
                            <input
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                type="text"
                                name="description"
                                id="description"
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            />
                        </div>
                        <div className="col-span-9">
                            <ImageDropper
                                files={file}
                                setFiles={setFile}
                                multiple={false}
                            />
                        </div>
                        <br />
                        <ul className="col-span-9 flex flex-wrap space-x-2">
                            {tags.map((tag) => (
                                <li
                                    key={tag}
                                    className="flex items-center space-x-1 bg-lightblue-600 text-light py-1 px-2 rounded-md"
                                >
                                    <span>{tag}</span>
                                    <XIcon
                                        className="hover:text-gray-300 cursor-pointer"
                                        size="20"
                                        onClick={() => {
                                            const newTags = tags.filter(
                                                (t) => t !== tag
                                            )
                                            setTags(newTags)
                                        }}
                                    />
                                </li>
                            ))}
                        </ul>
                        <div className="col-span-9">
                            <label
                                htmlFor="tags"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Tags
                            </label>
                            <div className="flex items-center space-x-4">
                                <input
                                    value={tag}
                                    type="text"
                                    name="tags"
                                    id="tags"
                                    className="mt-1 focus:ring-indigo-500 w-full max-w-sm focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    onChange={(e) => setTag(e.target.value)}
                                />
                                <button
                                    className="inline-flex justify-center mt-1 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        if (tag !== '' && !tags.includes(tag)) {
                                            setTags(tags.concat(tag))
                                        }
                                        setTag('')
                                    }}
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center space-x-2 px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <div className="text-red-400">
                        {error}
                        {loading && 'loading...'}
                    </div>
                    <div className="flex justify-end space-x-2">
                        <Disclosure.Button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Close
                        </Disclosure.Button>
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Save
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}
