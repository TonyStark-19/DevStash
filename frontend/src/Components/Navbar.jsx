// import necessary libraries and components
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { IoIosLogOut } from "react-icons/io";
import { FiBookmark, FiHome, FiLayers } from "react-icons/fi";

// Navbar Component
export function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    // This ensures "Resources" stays active even when viewing a detail page
    const isActive = (path) => {
        if (path === '/home') return location.pathname === '/home';
        return location.pathname.startsWith(path);
    };

    return (
        <nav className="w-full h-20 flex items-center justify-between px-8 md:px-16 border-b border-white/5 bg-black/20 backdrop-blur-md z-40 sticky top-0">
            {/* Logo */}
            <Link to="/home" className="flex items-center gap-2 group">
                <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                    DevStash
                </span>
            </Link>

            {/* Navigation Elements */}
            <div className="flex items-center gap-8">
                <div className="hidden md:flex items-center gap-6 border-r border-white/10 pr-8">
                    <Link
                        to="/home"
                        className={`flex items-center gap-2 text-sm font-medium transition-colors
                            ${isActive('/home') ? 'text-cyan-400' : 'text-slate-400 hover:text-white'}`}
                    >
                        <FiHome /> Home
                    </Link>
                    <Link
                        to="/resources"
                        className={`flex items-center gap-2 text-sm font-medium transition-colors
                            ${isActive('/resources') ? 'text-cyan-400' : 'text-slate-400 hover:text-white'}`}
                    >
                        <FiLayers /> Resources
                    </Link>
                    <Link
                        to="/saved"
                        className={`flex items-center gap-2 text-sm font-medium transition-colors
                            ${isActive('/saved') ? 'text-cyan-400' : 'text-slate-400 hover:text-white'}`}
                    >
                        <FiBookmark /> Saved
                    </Link>
                </div>

                {/* Logout Action */}
                <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-400 bg-red-400/5 border border-red-400/10
                    rounded-full hover:bg-red-400 hover:text-white transition-all duration-300 cursor-pointer"
                >
                    <span>Logout</span>
                    <IoIosLogOut className="text-lg" />
                </button>
            </div>
        </nav>
    );
}