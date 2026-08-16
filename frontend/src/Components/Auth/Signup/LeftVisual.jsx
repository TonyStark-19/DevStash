// import icons
import { FiLayers, FiBookmark, FiPlusCircle } from "react-icons/fi";

// left visual component
export default function LeftVisual() {
    return (
        <div className="hidden lg:flex flex-col justify-between p-8 md:p-10 bg-gradient-to-br from-cyan-500/10 to-transparent border-r border-white/5">
            <div className="mb-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 leading-snug">
                    Build your <br />
                    <span className="text-cyan-400 font-extrabold">Knowledge Stash</span>
                </h2>

                <p className="text-slate-400 text-sm leading-relaxed">
                    Join 2,000+ developers organizing their learning journey. Curated, shared, and built for the community.
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
                    alt="Developer illustration"
                    className="w-full max-h-[180px] object-contain opacity-80 drop-shadow-[0_15px_35px_rgba(6,182,212,0.15)]"
                />
            </div>
        </div>
    )
}