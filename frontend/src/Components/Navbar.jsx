// import necessary libraries and components
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useEffect, useState } from "react";

// icons
import { IoIosLogOut } from "react-icons/io";
import { FiBookmark, FiHome, FiLayers, FiMenu, FiX, FiTerminal } from "react-icons/fi";

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
        { name: "Home", path: "/home", icon: <FiHome size={16} /> },
        { name: "Resources", path: "/resources", icon: <FiLayers size={16} /> },
        { name: "Saved", path: "/saved", icon: <FiBookmark size={16} /> },
    ];

    return (
        <nav
            className="w-full h-20 flex items-center justify-between px-6 sm:px-10 lg:px-16 border-b border-white/5 bg-black/40 backdrop-blur-md 
            z-[100] sticky top-0"
        >
            {/* Left: Brand Icon & Name */}
            <div className="flex-1 flex justify-start">
                <Link
                    to="/home"
                    className="flex items-center gap-2.5 group"
                >
                    <div
                        className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 
                        group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300"
                    >
                        <FiTerminal size={20} />
                    </div>

                    <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                        DevStash
                    </span>
                </Link>
            </div>

            {/* Center: Navigation Links (Desktop) */}
            <div className="hidden md:flex items-center gap-1.5 p-1.5 rounded-full bg-white/[0.03] border border-white/10 backdrop-blur-sm">
                {navLinks.map((link) => {
                    const active = isActive(link.path);

                    return (
                        <Link
                            key={link.path}
                            to={link.path}
                            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 
                                ${active
                                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 shadow-sm"
                                    : "text-slate-400 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            {link.icon}
                            <span>{link.name}</span>
                        </Link>
                    );
                })}
            </div>

            {/* Right: Actions & Mobile Toggle */}
            <div className="flex-1 flex justify-end items-center gap-4">
                {/* Desktop Logout Button */}
                <button
                    onClick={handleLogout}
                    className="hidden md:flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-400 bg-red-500/10 border border-red-500/20 
                    rounded-full hover:bg-red-500 hover:text-white transition-all duration-300 active:scale-95 cursor-pointer shadow-sm shadow-red-500/5"
                >
                    <span>Logout</span>
                    <IoIosLogOut className="text-lg" />
                </button>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 
                    hover:text-white transition-all active:scale-90"
                    aria-label="Toggle Navigation Menu"
                >
                    {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                </button>
            </div>

            {/* Mobile Navigation Drawer */}
            <div
                className={`absolute top-20 left-0 w-full bg-[#030712]/95 backdrop-blur-2xl border-b border-white/10 md:hidden transition-all duration-300 
                ease-out overflow-hidden 
                    ${menuOpen
                        ? "max-h-[350px] opacity-100 py-6"
                        : "max-h-0 opacity-0 py-0 pointer-events-none"
                    }`}
            >
                <div className="flex flex-col gap-2 px-6">
                    {navLinks.map((link) => {
                        const active = isActive(link.path);

                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`flex items-center gap-3.5 px-4 py-3 text-base font-medium rounded-xl transition-all 
                                    ${active
                                        ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                                        : "text-slate-300 hover:text-white hover:bg-white/5"
                                    }`}
                            >
                                <span className="text-lg">{link.icon}</span>
                                {link.name}
                            </Link>
                        );
                    })}

                    <div className="h-px bg-white/10 my-2" />

                    <button
                        onClick={handleLogout}
                        className="flex items-center gap-3.5 px-4 py-3 text-base font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 
                        rounded-xl transition-all w-full text-left"
                    >
                        <IoIosLogOut className="text-xl" />
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}