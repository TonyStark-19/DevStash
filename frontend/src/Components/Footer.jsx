// import necessary libraries
import { Link } from "react-router-dom";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi";
import { BsGlobe2 } from "react-icons/bs";

// Footer Component
export function Footer() {
    const socialLinks = [
        { icon: <FiGithub size={18} />, href: "https://github.com/TonyStark-19", label: "GitHub" },
        { icon: <FiLinkedin size={18} />, href: "https://www.linkedin.com/in/aditya-chandel-dev", label: "LinkedIn" },
        { icon: <FiTwitter size={18} />, href: "https://twitter.com/iamaditya_3", label: "Twitter" },
        { icon: <BsGlobe2 size={18} />, href: "https://aditya-devfolio-one.vercel.app/", label: "Portfolio" },
    ];

    return (
        <footer className="relative mt-20 border-t border-white/5 bg-black/40 backdrop-blur-md font-poppins">
            {/* Subtle Top Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-8 py-12">
                <div className="grid max-[900px]:grid-cols-1 min-[900px]:grid-cols-4 gap-12 mb-12">

                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/home" className="flex items-center gap-2 mb-4 group w-fit">
                            <img
                                className="w-8 h-8"
                                src="/images/Favicon/DevStash.png"
                                alt="DevStash logo">
                            </img>
                            <span className="text-xl mt-2 font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                                DevStash
                            </span>
                        </Link>
                        <p className="text-slate-400 text-sm max-w-sm leading-relaxed mb-6">
                            Organizing the world's best developer resources.
                            Built for the community, by the community. Explore, save, and share your favorites.
                        </p>

                        {/* Product Hunt Dark Badge */}
                        <a
                            href="https://www.producthunt.com/products/devstash?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-devstash"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block transition-all duration-300 hover:opacity-80 active:scale-95"
                        >
                            <img
                                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1064040&theme=dark&t=1768757417282"
                                alt="DevStash - Product Hunt"
                                width="230"
                                height="54"
                                className="w-[200px] h-auto md:w-[250px]"
                            />
                        </a>
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
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={social.label}
                                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-cyan-500/50 transition-all"
                                >
                                    {social.icon}
                                </a>
                            ))}
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