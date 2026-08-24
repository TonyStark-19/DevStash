// import necessary libraries and components
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import { useEffect, useState } from "react";

// icons
import { FiBookmark, FiHome, FiLayers, FiMenu, FiTerminal, FiX, } from "react-icons/fi";
import { IoIosLogOut } from "react-icons/io";

// Navigation links
const navLinks = [
    { name: "Home", path: "/home", icon: FiHome, },
    { name: "Resources", path: "/resources", icon: FiLayers, },
    { name: "Saved", path: "/saved", icon: FiBookmark, },
];

// Navbar Component
export function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const { logout } = useAuth();

    // State for mobile menu
    const [menuOpen, setMenuOpen] = useState(false);

    // Close mobile menu when route changes
    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    // Logout
    const handleLogout = () => {
        setMenuOpen(false);
        logout();
        navigate("/");
    };

    // Active route
    const isActive = (path) => {
        if (path === "/home") {
            return location.pathname === "/home";
        }

        return location.pathname.startsWith(path);
    };

    return (
        <nav className="sticky top-0 z-[100] w-full border-b border-white/[0.06] bg-[#030712]/80 backdrop-blur-xl">
            <div className="mx-auto flex h-[72px] max-w-[1440px] items-center px-5 sm:px-8 lg:px-12">
                {/* Brand */}
                <div className="flex flex-1 items-center">
                    <Link
                        to="/home"
                        className="group flex items-center gap-2.5"
                    >
                        {/* Logo */}
                        <div
                            className="flex h-9 w-9 items-center justify-center rounded-lg border border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-400 
                            transition-all duration-300 group-hover:border-cyan-400/40 group-hover:bg-cyan-400/15 
                            group-hover:shadow-[0_0_20px_rgba(34,211,238,0.12)]"
                        >
                            <FiTerminal size={18} />
                        </div>

                        {/* Name */}
                        <span
                            className="text-[17px] font-semibold tracking-tight text-white transition-colors duration-200 group-hover:text-cyan-400"
                        >
                            DevStash
                        </span>
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div
                    className="hidden items-center gap-1 rounded-xl border border-white/[0.06] bg-white/[0.025] p-1 md:flex"
                >
                    {navLinks.map(({ name, path, icon: Icon }) => {
                        const active = isActive(path);

                        return (
                            <Link
                                key={path}
                                to={path}
                                className={`relative flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200
                                    ${active
                                        ? "bg-white/[0.07] text-white"
                                        : "text-slate-400 hover:bg-white/[0.04] hover:text-slate-200"
                                    }
                                `}
                            >
                                <Icon
                                    size={15}
                                    className={
                                        active
                                            ? "text-cyan-400"
                                            : "text-slate-500"
                                    }
                                />

                                <span>{name}</span>

                                {/* Active indicator */}
                                {active && (
                                    <span className="absolute bottom-0 left-1/2 h-px w-5 -translate-x-1/2 bg-cyan-400/70" />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* Right Actions */}
                <div className="flex flex-1 items-center justify-end">
                    {/* Desktop Logout */}
                    <button
                        onClick={handleLogout}
                        className="hidden items-center gap-2 rounded-lg border border-red-400/10 bg-red-400/[0.05] px-3.5 py-2 text-sm font-medium 
                        text-red-400 transition-all duration-200 hover:border-red-400/20 hover:bg-red-400/10 hover:text-red-300 active:scale-95 md:flex"
                    >
                        <span>Logout</span>
                        <IoIosLogOut size={17} />
                    </button>

                    {/* Mobile Menu */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen((prev) => !prev)}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-slate-300 
                        transition-all duration-200 hover:border-white/15 hover:bg-white/[0.06] hover:text-white active:scale-95 md:hidden"
                        aria-label={
                            menuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? (
                            <FiX size={19} />
                        ) : (
                            <FiMenu size={19} />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`overflow-hidden border-t border-white/[0.05] bg-[#030712]/95 backdrop-blur-2xl transition-all duration-300 ease-out md:hidden
                    ${menuOpen
                        ? "max-h-[400px] opacity-100"
                        : "max-h-0 opacity-0"
                    }
                `}
            >
                <div className="space-y-1 px-5 py-4">
                    {navLinks.map(({ name, path, icon: Icon }) => {
                        const active = isActive(path);

                        return (
                            <Link
                                key={path}
                                to={path}
                                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200
                                    ${active
                                        ? "border border-cyan-400/10 bg-cyan-400/[0.06] text-cyan-400"
                                        : "border border-transparent text-slate-400 hover:bg-white/[0.04] hover:text-white"
                                    }
                                `}
                            >
                                <Icon size={17} />
                                <span>{name}</span>
                            </Link>
                        );
                    })}

                    {/* Divider */}
                    <div className="my-3 h-px bg-white/[0.06]" />

                    {/* Mobile Logout */}
                    <button
                        type="button"
                        onClick={handleLogout}
                        className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left text-sm font-medium text-red-400 transition-all duration-200 
                        hover:bg-red-400/[0.06] hover:text-red-300 cursor-pointer"
                    >
                        <IoIosLogOut size={19} />
                        <span>Logout</span>
                    </button>
                </div>
            </div>
        </nav>
    );
}