// react icons
import { FaRegUser } from "react-icons/fa";

// Navbar component
export function Navbar() {
    return (
        <div className="text-white py-7 flex flew-row justify-evenly items-center w-full fixed">
            <div className="text-2xl font-semibold cursor-pointer">DevStash</div>
            <FaRegUser className="text-xl cursor-pointer" />
        </div>
    )
}