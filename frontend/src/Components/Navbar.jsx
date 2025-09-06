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
        navigate("/"); // back to login
    };

    return (
        <div className="text-white/80 py-7 flex flex-row items-center w-full font-poppins relative min-a:justify-evenly
        max-a:justify-around max-d:justify-between max-d:px-8">
            <Link to="/home">
                <div className="text-2xl font-semibold cursor-pointer">DevStash</div>
            </Link>

            {/* Wrap icon + dropdown together */}
            <div
                className="relative inline-block"
                onClick={() => setShowMenu(!showMenu)}
            >
                <FaRegUser className="text-[22px] cursor-pointer" />

                {showMenu && (
                    <div className="absolute flex flex-col bg-white/10 right-0 w-45 mt-2 py-3 px-5 rounded-lg shadow-lg">
                        <Link
                            to="/saved"
                            className="text-[16px] mb-2 hover:text-cyan-400"
                        >
                            Saved Resources
                        </Link>

                        <button
                            onClick={handleLogout}
                            className="w-full flex flex-row items-center gap-2 text-left text-[16px] text-red-400
                            hover:text-red-500 cursor-pointer"
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