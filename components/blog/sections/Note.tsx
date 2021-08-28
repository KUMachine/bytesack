export default function Note(props: any) {
    return (
        <p className="text-lg text-gray-400 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 border-l-4 border-gray-400 dark:border-gray-400 py-2 px-5">
            {props.children}
        </p>
    )
}
