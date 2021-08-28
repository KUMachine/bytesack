import { FaCircle as ListIcon } from 'react-icons/fa'
interface ListProps {
    children: JSX.Element[]
}
export default function List(props: ListProps) {
    return (
        <ul className="text-lg">
            {props.children.map((item) => {
                return (
                    <li className="flex">
                        <ListIcon
                            size="12"
                            className="text-purple-400 dark:text-purple-600 mx-2 mt-2"
                        />
                        {item}
                    </li>
                )
            })}
        </ul>
    )
}
