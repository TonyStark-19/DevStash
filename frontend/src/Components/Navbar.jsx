// import necessary libraries and components
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useEffect, useState } from "react";

// icons
import { IoIosLogOut } from "react-icons/io";
import { FiBookmark, FiHome, FiLayers, FiMenu, FiX } from "react-icons/fi";

// Navbar Component
export function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { logout } = useAuth();

    // State for mobile menu
    const [menuOpen, setMenuOpen] = useState(false);

    // Close menu on route change
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    // Logout Handler
    const handleLogout = () => {
        setMenuOpen(false);
        logout();
        navigate("/");
    };
    // Function to check if link is active
    const isActive = (path) => {
        if (path === '/home') return location.pathname === '/home';
        return location.pathname.startsWith(path);
    };

    // Navigation Links
    const navLinks = [
        { name: "Home", path: "/home", icon: <FiHome /> },
        { name: "Resources", path: "/resources", icon: <FiLayers /> },
        { name: "Saved", path: "/saved", icon: <FiBookmark /> },
    ];

    return (
        <nav className="w-full h-20 flex items-center justify-between px-8 md:px-16 border-b border-white/5 bg-black/40 backdrop-blur-md z-[100] sticky top-0">
            {/* Logo */}
            <Link to="/home" className="flex items-center gap-2 group">
                <img
                    className="w-8 h-8"
                    src="/images/Favicon/DevStash.png"
                    alt="DevStash logo"
                />
                <span className="text-xl mt-2 font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                    DevStash
                </span>
            </Link>

            {/* Desktop Navigation Elements */}
            <div className="flex items-center gap-8">
                <div className="hidden md:flex items-center gap-6 border-r border-white/10 pr-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`flex items-center gap-2 text-sm font-medium transition-colors
                                ${isActive(link.path) ? 'text-cyan-400' : 'text-slate-400 hover:text-white'}`}
                        >
                            {link.icon} {link.name}
                        </Link>
                    ))}
                </div>

                {/* Logout Action (Desktop) */}
                <button
                    onClick={handleLogout}
                    className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-400 bg-red-400/5 border border-red-400/10
                    rounded-full hover:bg-red-400 hover:text-white transition-all duration-300 cursor-pointer"
                >
                    <span>Logout</span>
                    <IoIosLogOut className="text-lg" />
                </button>

                {/* Mobile Toggle Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-2xl text-white transition-transform active:scale-90"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* MOBILE OVERLAY */}
            <div
                className={`absolute top-20 left-0 w-full bg-black/95 backdrop-blur-2xl border-b border-white/10 md:hidden transition-all duration-300 ease-out
                ${menuOpen ? "translate-y-0 opacity-100 pointer-events-auto" : "-translate-y-2 opacity-0 pointer-events-none"}`}
            >
                <div className="flex flex-col gap-6 p-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`flex items-center gap-4 text-lg font-medium transition-colors
                                ${isActive(link.path) ? 'text-cyan-400' : 'text-slate-300 hover:text-white'}`}
                        >
                            <span className="text-xl">{link.icon}</span>
                            {link.name}
                        </Link>
                    ))}

                    <div className="h-[1px] bg-white/10 my-2" />

                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-4 text-lg font-medium text-red-400 hover:text-red-300 transition-colors"
                    >
                        <IoIosLogOut className="text-xl" />
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
}