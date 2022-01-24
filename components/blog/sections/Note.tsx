export default function Note(props: any) {
    return (
        <p className="border-l-4 border-gray-400 bg-gray-100 py-2 px-5 text-lg text-gray-400 dark:border-gray-400 dark:bg-gray-700 dark:text-gray-400">
            {props.children}
        </p>
    )
}
