// import icons
import { GrResources } from "react-icons/gr";
import { FiArrowRight, FiStar } from "react-icons/fi";

// import link
import { Link } from "react-router-dom";

// cta section
export default function CTASection() {
    return (
        <section className="relative z-10 pt-24 pb-12 px-6 max-w-4xl mx-auto text-center border-t-2 border-white/5">
            {/* Main Statement */}
            <div data-aos="fade-up">
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6 leading-18">
                    Ready to level up your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">
                        developer stash?
                    </span>
                </h2>

                <p className="max-w-xl mx-auto text-base sm:text-lg text-slate-400 mb-10 leading-relaxed">
                    Explore community-vetted resources or help other developers find top-tier tools by starring the repository.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/resources"
                        className="w-full sm:w-auto"
                    >
                        <button
                            className="w-full sm:w-auto px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm rounded-full transition-all 
                            duration-300 transform active:scale-95 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 
                            group cursor-pointer"
                        >
                            <GrResources />
                            Start Exploring Resources
                            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>

                    <a
                        href="https://github.com/TonyStark-19/DevStash"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 
                        font-semibold text-sm rounded-full transition-all duration-300 transform active:scale-95 flex items-center justify-center 
                        gap-2 cursor-pointer"
                    >
                        <FiStar className="text-amber-400 fill-amber-400/20" />
                        Star on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}