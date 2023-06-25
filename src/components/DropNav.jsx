import {useState} from "react"
import { IoMenu } from "react-icons/io5";

export default function DropNav(){
    const [isOpen, setIsOpen] = useState(false)

    return (
        <button onClick={setIsOpen(!isOpen)}>
            <IoMenu />

        </button>
    )
}