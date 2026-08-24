// import icons
import { FiBookmark, FiCode, FiCompass, FiGithub, FiShield, FiUsers, FiZap, } from "react-icons/fi";

// Features
const features = [
    {
        icon: FiCompass,
        title: "Discover Without Noise",
        description:
            "Skip outdated tutorials and broken resources. Find high-quality documentation, roadmaps, repositories, and developer tools in one place.",
    },
    {
        icon: FiBookmark,
        title: "Your Knowledge Vault",
        description:
            "Save what matters. Bookmark resources, organize your discoveries, and build a personal library you can return to whenever you code.",
    },
    {
        icon: FiUsers,
        title: "Built by the Community",
        description:
            "Discover resources shared by developers, contribute your own, and help others find tools and learning material worth their time.",
    },
    {
        icon: FiShield,
        title: "Security First",
        description:
            "Built with a modern MERN architecture featuring OAuth authentication, JWT-based sessions, protected routes, and optimized API access.",
    },
];

// about section
export default function AboutSection() {
    return (
        <section
            id="about"
            className="relative z-10 mx-auto max-w-7xl border-t border-white/[0.06] px-6 py-24 sm:px-8 lg:px-10"
        >
            {/* Section Header */}
            <div
                className="mx-auto mb-14 max-w-3xl text-center"
                data-aos="fade-up"
            >
                {/* Eyebrow */}
                <div
                    className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] px-3 py-1.5 text-[11px] 
                    font-semibold uppercase tracking-[0.18em] text-cyan-400"
                >
                    <FiCode size={13} />
                    About DevStash
                </div>

                {/* Heading */}
                <h2
                    className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
                >
                    Engineered to Accelerate Your
                    <br />

                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Engineering Workflow
                    </span>
                </h2>

                {/* Description */}
                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                    DevStash is an open platform built to eliminate tutorial fatigue. Discover, save, and share high-quality developer
                    resources without wasting hours searching for them.
                </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {features.map((feature, index) => {
                    const Icon = feature.icon;

                    return (
                        <div
                            key={feature.title}
                            className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7 transition-all duration-300 
                            hover:-translate-y-0.5 hover:border-cyan-400/20 hover:bg-white/[0.035]"
                            data-aos="fade-up"
                            data-aos-delay={index * 75}
                        >
                            {/* Subtle glow */}
                            <div
                                className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/[0.06] blur-3xl transition-all 
                                duration-500 group-hover:bg-cyan-400/[0.10]"
                            />

                            {/* Icon */}
                            <div
                                className="relative mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06] 
                                text-cyan-400 transition-all duration-300 group-hover:border-cyan-400/30 group-hover:bg-cyan-400/10"
                            >
                                <Icon size={20} />
                            </div>

                            {/* Content */}
                            <div className="relative">
                                <h3 className="mb-2 text-lg font-semibold tracking-tight text-white">
                                    {feature.title}
                                </h3>

                                <p className="text-sm leading-6 text-slate-400">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Bottom accent */}
                            <div
                                className="absolute bottom-0 left-7 right-7 h-px bg-gradient-to-r from-cyan-400/0 via-cyan-400/20 to-cyan-400/0 opacity-0 
                                transition-opacity duration-300 group-hover:opacity-100"
                            />
                        </div>
                    );
                })}
            </div>

            {/* Open Source */}
            <div
                className="relative mt-5 overflow-hidden rounded-2xl border border-cyan-400/10 bg-gradient-to-br from-cyan-400/[0.06] via-blue-500/[0.03] 
                to-transparent p-7 sm:p-8"
                data-aos="fade-up"
            >
                {/* Background glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-400/[0.07] blur-3xl" />

                <div className="relative flex flex-col items-center justify-between gap-6 md:flex-row">
                    {/* Content */}
                    <div className="max-w-2xl text-center md:text-left">
                        <div className="mb-2 flex items-center justify-center gap-2 md:justify-start">
                            <FiZap className="text-cyan-400" size={17} />

                            <h3 className="text-base font-semibold text-white">
                                Built in the Open
                            </h3>
                        </div>

                        <p className="text-sm leading-6 text-slate-400">
                            DevStash is open-source and ad-free. Explore the code, suggest improvements, or contribute resources
                            that can help developers learn and build better.
                        </p>
                    </div>

                    {/* CTA */}
                    <a
                        href="https://github.com/TonyStark-19/DevStash"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-cyan-400/20 bg-cyan-400/10 px-4 py-2.5 text-sm 
                        font-medium text-cyan-300 transition-all duration-200 hover:border-cyan-400/30 hover:bg-cyan-400/15 hover:text-cyan-200 
                        active:scale-95"
                    >
                        <FiGithub size={16} />
                        View Source
                    </a>
                </div>
            </div>
        </section>
    );
}