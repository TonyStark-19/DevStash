import { GrResources } from "react-icons/gr";
import { FiArrowUpRight, FiStar } from "react-icons/fi";
import { Link } from "react-router-dom";

export default function CTASection() {
    return (
        <section className="relative z-10 overflow-hidden px-6 pt-32 pb-6 border-t border-white/[0.06]">
            {/* Subtle background glow */}
            <div
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full 
                bg-cyan-500/[0.06] blur-[120px]"
            />

            <div
                data-aos="fade-up"
                className="mx-auto max-w-5xl text-center"
            >
                {/* Small label */}
                <div className="mb-7 flex items-center justify-center gap-3">
                    <span className="h-px w-8 bg-white/10" />
                    <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-slate-500">
                        Keep building
                    </span>
                    <span className="h-px w-8 bg-white/10" />
                </div>

                {/* Heading */}
                <h2 className="text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl md:text-6xl md:leading-[1.05]">
                    Find the tools.
                    <br />
                    <span className="text-slate-500">
                        Build something great.
                    </span>
                </h2>

                {/* Description */}
                <p className="mx-auto mt-7 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
                    A curated collection of developer resources, built by the
                    community and made for people who love to build.
                </p>

                {/* Actions */}
                <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row">
                    <Link
                        to="/resources"
                        className="group inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:bg-cyan-300"
                    >
                        <GrResources />
                        Explore DevStash
                        <FiArrowUpRight className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>

                    <a
                        href="https://github.com/TonyStark-19/DevStash"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-white"
                    >
                        <FiStar className="text-amber-400 transition-transform group-hover:scale-110" />
                        Star us on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}