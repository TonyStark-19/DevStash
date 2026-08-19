// import necessary libraries
import { Link } from "react-router-dom";
import { FiGithub, FiTwitter, FiLinkedin, FiTerminal, FiArrowUpRight, FiHeart } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";

// social links data
const socialLinks = [
    { icon: <FiGithub size={17} />, href: "https://github.com/TonyStark-19", label: "GitHub" },
    { icon: <FiLinkedin size={17} />, href: "https://www.linkedin.com/in/aditya-chandel-dev", label: "LinkedIn" },
    { icon: <FiTwitter size={17} />, href: "https://twitter.com/iamaditya_3", label: "Twitter" },
    { icon: <BsGlobe2 size={17} />, href: "https://aditya-devfolio-one.vercel.app/", label: "Portfolio" },
];

// quick links data
const quickLinks = [
    { name: "Home", href: "/home" },
    { name: "Browse Resources", href: "/resources" },
    { name: "Saved Stash", href: "/saved" },
];

// Footer Component
export function Footer() {
    return (
        <footer className="relative mt-24 border-t border-white/5 bg-[#030712]/80 backdrop-blur-xl font-poppins">
            {/* Subtle Top Gradient Accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 mb-20">
                    {/* Brand Section */}
                    <div className="md:col-span-6 space-y-4">
                        <Link
                            to="/home"
                            className="inline-flex items-center gap-2.5 group"
                        >
                            <div
                                className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center 
                                text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all duration-300"
                            >
                                <FiTerminal size={20} />
                            </div>

                            <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                                DevStash
                            </span>
                        </Link>

                        <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                            Organizing the world's best developer resources. Curated, open-source, and community powered for fast shipping.
                        </p>

                        {/* Open Source Badge */}
                        <div className="pt-1">
                            <span
                                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 
                                text-slate-300 text-xs font-medium"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                                100% Free & Open Source
                            </span>
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="md:col-span-3">
                        <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                            Platform
                        </h4>

                        <ul className="space-y-2.5">
                            {quickLinks.map((link, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={link.href}
                                        className="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2 group"
                                    >
                                        <span>{link.name}</span>

                                        <FiArrowUpRight
                                            size={13}
                                            className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-cyan-400"
                                        />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Community & Socials */}
                    <div className="md:col-span-3">
                        <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">
                            Connect
                        </h4>

                        <p className="text-slate-400 text-xs mb-4">
                            Contribute or follow creator updates.
                        </p>

                        <div className="flex items-center gap-2.5">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={social.label}
                                    className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/10 flex items-center justify-center 
                                    text-slate-400 hover:text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-500/30 transition-all duration-200"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© {new Date().getFullYear()} DevStash. Built for developers worldwide.</p>

                    <p className="flex items-center gap-1.5">
                        Crafted with <FiHeart className="text-red-400 fill-red-400/20 text-sm inline" /> by{" "}
                        <a
                            href="https://aditya-devfolio-one.vercel.app/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-300 font-medium hover:text-cyan-400 transition-colors"
                        >
                            Aditya Chandel
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}