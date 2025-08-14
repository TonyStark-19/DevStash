// react icons
import { FaRegUser } from "react-icons/fa";

// import Link
import { Link } from "react-router-dom";

// Navbar component
export function Navbar() {
    return (
        <div className="text-white/80 py-7 flex flew-row justify-evenly items-center w-full font-poppins">
            <Link to="/">
                <div className="text-2xl font-semibold cursor-pointer">DevStash</div>
            </Link>
            <FaRegUser className="text-xl cursor-pointer" />
        </div>
    )
}