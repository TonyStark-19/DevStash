// react icons
import { FaRegUser } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";

// import Link and use navigate
import { Link, useNavigate } from "react-router-dom";

// import context
import { useAuth } from "../Context/AuthContext";
import { useState } from "react";

// Navbar component
export function Navbar() {
    const navigate = useNavigate();
    const { logout } = useAuth();
    const [showMenu, setShowMenu] = useState(false);

    // handle logout
    const handleLogout = () => {
        logout();
        navigate("/"); // back to signup
    };

    return (
        <div className="text-white/80 py-7 flex flex-row justify-evenly items-center w-full font-poppins relative">
            <Link to="/home">
                <div className="text-2xl font-semibold cursor-pointer">DevStash</div>
            </Link>

            {/* Wrap icon + dropdown together */}
            <div
                className="relative inline-block"
                onMouseEnter={() => setShowMenu(true)}
            >
                <FaRegUser className="text-[22px] cursor-pointer" />

                {showMenu && (
                    <div className="absolute flex flex-col bg-white/10 right-0 w-45 mt-2 py-3 px-5 rounded-lg shadow-lg"
                        onMouseLeave={() => setShowMenu(false)}>
                        <Link
                            to="/saved"
                            className="text-[15px] mb-2 hover:text-cyan-400"
                        >
                            Saved Resources
                        </Link>
                        <button
                            onClick={handleLogout}
                            className="text-[15px] text-red-400 flex flex-row items-center gap-2 hover:text-red-500 
                            cursor-pointer"
                        >
                            Logout
                            <IoIosLogOut />
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}