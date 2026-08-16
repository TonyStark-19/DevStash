// features dat
const features = [
    {
        icon: FiCompass,
        title: "Discover Without Noise",
        description: "Say goodbye to outdated blog posts and broken tutorials. Find vetted, high-impact documentation, roadmaps, and dev tools in seconds."
    },
    {
        icon: FiBookmark,
        title: "Personal Knowledge Vault",
        description: "Organize what you learn. Save articles, bookmark repositories, and build custom stacks ready to reference whenever you code."
    },
    {
        icon: FiUsers,
        title: "Community Driven",
        description: "Built for devs, maintained by devs. Submit your favorite packages, upvote game-changing libraries, and help junior engineers level up."
    },
    {
        icon: FiShield,
        title: "Security-First Architecture",
        description: "Engineered on a modern MERN stack featuring OAuth 2.0 verification, JWT encryption, and rapid backend data retrieval."
    }
];

// import icons
import { FiCompass, FiBookmark, FiUsers, FiShield, FiCode, FiZap, FiGithub } from "react-icons/fi";

// about section component
export default function AboutSection() {
    return (
        <section className="relative z-10 py-24 px-6 max-w-6xl mx-auto border-t-2 border-white/5">
            <div
                className="text-center mb-16"
                data-aos="fade-up"
            >
                <div
                    className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 
                    text-xs font-semibold uppercase tracking-widest"
                >
                    <FiCode className="text-sm" />
                    About DevStash
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-16">
                    Engineered to Accelerate Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        Engineering Workflow
                    </span>
                </h2>

                <p className="max-w-2xl mx-auto text-slate-400 text-sm md:text-base leading-relaxed">
                    DevStash is an open platform built to solve tutorial fatigue. We curate, verify, and organize high-quality software resources so you
                    spend less time searching and more time shipping.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="group p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-md hover:border-cyan-500/40 
                        hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-all" />

                        <div
                            className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 
                            group-hover:bg-cyan-400 group-hover:text-black transition-all"
                        >
                            <feature.icon size={22} />
                        </div>

                        <h3 className="text-xl font-semibold text-white mb-2.5">
                            {feature.title}
                        </h3>

                        <p className="text-slate-400 text-sm leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>

            <div
                className="mt-10 p-8 md:p-10 rounded-3xl bg-gradient-to-r from-cyan-950/20 via-blue-950/20 to-transparent border border-cyan-500/20 
                backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6"
                data-aos="fade-up"
            >
                <div className="space-y-2 text-center md:text-left">
                    <h4 className="text-lg font-bold text-white flex items-center justify-center md:justify-start gap-2">
                        <FiZap className="text-cyan-400" />
                        Our Open-Source Pledge
                    </h4>

                    <p className="text-slate-400 text-sm max-w-xl">
                        DevStash will always remain open and ad-free. Anyone can audit our code, suggest new features, or contribute learning materials on GitHub.
                    </p>
                </div>

                <a
                    href="https://github.com/TonyStark-19/DevStash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold rounded-xl text-sm transition-all duration-300 transform 
                    active:scale-95 shrink-0 flex items-center gap-2"
                >
                    <FiGithub size={16} />
                    View Source Code
                </a>
            </div>
        </section>
    );
}