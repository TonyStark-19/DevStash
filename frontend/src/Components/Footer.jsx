// import necessary libraries
import { Link } from "react-router-dom";
import { FiGithub, FiTwitter, FiLinkedin, FiMail } from "react-icons/fi";

// Footer Component
export function Footer() {
    return (
        <footer className="relative mt-20 border-t border-white/5 bg-black/40 backdrop-blur-md font-poppins">
            {/* Subtle Top Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/home" className="flex items-center mb-4 group w-fit">
                            <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                                DevStash
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                            Organizing the world's best developer resources.
                            Built for the community, by the community. Explore, save, and share your favorites.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Navigation</h4>
                        <ul className="space-y-4">
                            <li><Link to="/home" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Home</Link></li>
                            <li><Link to="/resources" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Browse Resources</Link></li>
                            <li><Link to="/saved" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Saved Stash</Link></li>
                        </ul>
                    </div>

                    {/* Community Section */}
                    <div>
                        <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Community</h4>
                        <div className="flex gap-4">
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border
                            border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                                <FiGithub size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center
                            text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                                <FiTwitter size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center
                            text-slate-400 hover:text-white hover:bg-white/10 transition-all">
                                <FiMail size={18} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} DevStash. All rights reserved.</p>
                    <p className="flex items-center gap-1.5">
                        Made with <span className="text-red-500 animate-pulse">❤️</span> by
                        <span className="text-white font-medium hover:text-cyan-400 transition-colors cursor-pointer"> Aditya Chandel</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}