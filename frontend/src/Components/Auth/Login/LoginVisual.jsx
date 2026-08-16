// import icons
import { FiLayers, FiBookmark, FiPlusCircle } from "react-icons/fi";

// login visual component
export default function LoginVisual() {
    return (
        <div
            className="hidden lg:flex flex-col justify-between p-8 md:p-10 bg-gradient-to-tl from-cyan-500/10 to-transparent border-l
            border-white/5 order-1 lg:order-2"
        >
            <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-snug">
                    Your Dev Journey, <br />
                    <span className="text-cyan-400 font-extrabold">Organized.</span>
                </h2>

                <p className="text-slate-400 text-sm leading-relaxed">
                    Sign in to access your saved tutorials, favorite tools, and community contributions.
                </p>
            </div>

            <div className="space-y-4 my-auto">
                <div className="flex items-center gap-3.5 group">
                    <div
                        className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center
                        text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all shrink-0"
                    >
                        <FiLayers size={17} />
                    </div>

                    <div className="text-xs md:text-sm font-medium text-slate-300">Curated Tech Resources</div>
                </div>

                <div className="flex items-center gap-3.5 group">
                    <div
                        className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center 
                        text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all shrink-0"
                    >
                        <FiBookmark size={17} />
                    </div>

                    <div className="text-xs md:text-sm font-medium text-slate-300">Personal Bookmarks & Collections</div>
                </div>

                <div className="flex items-center gap-3.5 group">
                    <div
                        className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center
                        text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all shrink-0"
                    >
                        <FiPlusCircle size={17} />
                    </div>

                    <div className="text-xs md:text-sm font-medium text-slate-300">Community Powered Contributions</div>
                </div>
            </div>

            <div className="relative mt-4">
                <img
                    src="/images/Login/SideBox.png"
                    alt="Login Illustration"
                    className="w-full max-h-[180px] object-contain opacity-90 drop-shadow-[0_15px_35px_rgba(6,182,212,0.15)]"
                />
            </div>
        </div>
    )
}