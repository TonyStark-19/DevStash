// import usestate
import { useState } from "react";

// import link
import { Link } from "react-router-dom";

// icons
import { FiArrowRight, FiCloud, FiCpu, FiDatabase, FiLayers, FiServer, FiTerminal, } from "react-icons/fi";
import { GrResources } from "react-icons/gr";

// Categories
const categories = [
    { id: "all", name: "All Stacks", icon: FiLayers },
    { id: "frontend", name: "Frontend", icon: FiLayers },
    { id: "backend", name: "Backend", icon: FiServer },
    { id: "database", name: "Databases", icon: FiDatabase },
    { id: "programming", name: "Languages", icon: FiTerminal },
    { id: "devops", name: "DevOps & Cloud", icon: FiCloud },
];

// Tech stacks
const techStacks = [
    // Frontend
    { name: "HTML5", category: "frontend", icon: "/images/frontend/HTML5.svg" },
    { name: "CSS3", category: "frontend", icon: "/images/frontend/CSS3.svg" },
    { name: "JavaScript", category: "frontend", icon: "/images/frontend/JavaScript.svg" },
    { name: "TypeScript", category: "frontend", icon: "/images/frontend/TypeScript.svg" },
    { name: "React", category: "frontend", icon: "/images/frontend/React.svg" },
    { name: "Next.js", category: "frontend", icon: "/images/frontend/Next.js.svg" },
    { name: "Vue.js", category: "frontend", icon: "/images/frontend/Vue.js.svg" },
    { name: "Nuxt.js", category: "frontend", icon: "/images/frontend/Nuxt.svg" },
    { name: "Angular", category: "frontend", icon: "/images/frontend/Angular.svg" },
    { name: "Svelte", category: "frontend", icon: "/images/frontend/Svelte.svg" },
    { name: "Bootstrap", category: "frontend", icon: "/images/frontend/Bootstrap.svg" },
    { name: "Tailwind CSS", category: "frontend", icon: "/images/frontend/Tailwind.svg" },
    { name: "Material UI", category: "frontend", icon: "/images/frontend/MaterialUI.svg" },

    // Backend
    { name: "Node.js", category: "backend", icon: "/images/backend/Node.js.svg" },
    { name: "Express", category: "backend", icon: "/images/backend/Express.svg" },
    { name: "Django", category: "backend", icon: "/images/backend/Django.svg" },
    { name: "Flask", category: "backend", icon: "/images/backend/Flask.svg" },
    { name: "Ruby on Rails", category: "backend", icon: "/images/backend/RubyOnRails.svg" },
    { name: "Laravel", category: "backend", icon: "/images/backend/Laravel.svg" },
    { name: "FastAPI", category: "backend", icon: "/images/backend/FastAPI.svg" },

    // Databases
    { name: "MongoDB", category: "database", icon: "/images/database/MongoDB.svg" },
    { name: "MySQL", category: "database", icon: "/images/database/MySQL.svg" },
    { name: "PostgreSQL", category: "database", icon: "/images/database/PostgreSQL.svg" },
    { name: "SQLite", category: "database", icon: "/images/database/SQLite.svg" },
    { name: "Redis", category: "database", icon: "/images/database/Redis.svg" },
    { name: "Firebase", category: "database", icon: "/images/database/Firebase.svg" },

    // Languages
    { name: "C", category: "programming", icon: "/images/programming/C.svg" },
    { name: "C++", category: "programming", icon: "/images/programming/CPlusPlus.svg" },
    { name: "Python", category: "programming", icon: "/images/programming/Python.svg" },
    { name: "Java", category: "programming", icon: "/images/programming/Java.svg" },
    { name: "Go", category: "programming", icon: "/images/programming/Go.svg" },
    { name: "Rust", category: "programming", icon: "/images/programming/Rust.svg" },
    { name: "PHP", category: "programming", icon: "/images/programming/PHP.svg" },
    { name: "Ruby", category: "programming", icon: "/images/programming/Ruby.svg" },
    { name: "Kotlin", category: "programming", icon: "/images/programming/Kotlin.svg" },
    { name: "Swift", category: "programming", icon: "/images/programming/Swift.svg" },
    { name: "Scala", category: "programming", icon: "/images/programming/Scala.svg" },

    // DevOps & Cloud
    { name: "Git", category: "devops", icon: "/images/VersionControlAndDevOps/Git.svg" },
    { name: "GitHub", category: "devops", icon: "/images/VersionControlAndDevOps/GitHub.svg" },
    { name: "GitLab", category: "devops", icon: "/images/VersionControlAndDevOps/GitLab.svg" },
    { name: "Docker", category: "devops", icon: "/images/VersionControlAndDevOps/Docker.svg" },
    { name: "Kubernetes", category: "devops", icon: "/images/VersionControlAndDevOps/Kubernetes.svg" },
    { name: "Jenkins", category: "devops", icon: "/images/VersionControlAndDevOps/Jenkins.svg" },
    { name: "AWS", category: "devops", icon: "/images/CloudAndHosting/AWS.svg" },
    { name: "Azure", category: "devops", icon: "/images/CloudAndHosting/Azure.svg" },
    { name: "Google Cloud", category: "devops", icon: "/images/CloudAndHosting/GoogleCloud.svg" },
    { name: "Vercel", category: "devops", icon: "/images/CloudAndHosting/Vercel.svg" },
    { name: "Heroku", category: "devops", icon: "/images/CloudAndHosting/Heroku.svg" },
];

// Metrics
const metrics = [
    { count: "45+", title: "Tech Stacks", highlight: true, },
    { count: "150+", title: "Vetted Resources", },
    { count: "6", title: "Core Domains", highlight: true, },
    { count: "100%", title: "Community Free", },
];

// tech stack section
export default function TechStackSection() {
    const [activeTab, setActiveTab] = useState("all");

    const filteredStacks =
        activeTab === "all"
            ? techStacks
            : techStacks.filter((stack) => stack.category === activeTab);

    return (
        <section
            id="tech-stack"
            className="relative z-10 mx-auto max-w-7xl border-t border-white/[0.06] px-6 py-24 sm:px-8 lg:px-10"
        >
            {/* Header */}
            <div
                className="mx-auto mb-14 max-w-3xl text-center"
                data-aos="fade-up"
            >
                <div
                    className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/15 bg-cyan-400/[0.06] px-3 py-1.5 text-[11px] 
                    font-semibold uppercase tracking-[0.18em] text-cyan-400"
                >
                    <FiCpu size={13} />
                    Stack Ecosystem
                </div>

                <h2
                    className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
                >
                    Explore the Tools Behind
                    <br />

                    <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                        Modern Software
                    </span>
                </h2>

                <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
                    Explore curated resources across frontend, backend, databases, programming languages, and cloud infrastructure.
                </p>
            </div>

            {/* Metrics */}
            <div
                className="mb-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] md:grid-cols-4"
                data-aos="fade-up"
            >
                {metrics.map((metric) => (
                    <div
                        key={metric.title}
                        className="bg-[#030712]/80 px-5 py-6 text-center transition-colors hover:bg-white/[0.025]"
                    >
                        <div
                            className={`
                                mb-1 text-2xl font-bold tracking-tight sm:text-3xl
                                ${metric.highlight
                                    ? "bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                                    : "text-white"
                                }
                            `}
                        >
                            {metric.count}
                        </div>

                        <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500 sm:text-xs">
                            {metric.title}
                        </div>
                    </div>
                ))}
            </div>

            {/* Category Filters */}
            <div
                className="mb-8 flex flex-wrap justify-center gap-2"
                data-aos="fade-up"
            >
                {categories.map((category) => {
                    const Icon = category.icon;
                    const active = activeTab === category.id;

                    return (
                        <button
                            key={category.id}
                            type="button"
                            onClick={() => setActiveTab(category.id)}
                            className={`inline-flex items-center gap-2 rounded-lg border px-3.5 py-2 text-xs font-medium transition-all duration-200 sm:text-sm 
                            cursor-pointer 
                                ${active
                                    ? "border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-300"
                                    : "border-white/[0.06] bg-white/[0.02] text-slate-400 hover:border-white/10 hover:bg-white/[0.04] hover:text-slate-200"
                                }
                            `}
                        >
                            <Icon size={15} />
                            {category.name}
                        </button>
                    );
                })}
            </div>

            {/* Stack Grid */}
            <div
                className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
                data-aos="fade-up"
            >
                {filteredStacks.map((stack) => (
                    <div
                        key={stack.name}
                        className="group relative flex min-h-[110px] flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border 
                        border-white/[0.06] bg-white/[0.02] px-3 py-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/20 
                        hover:bg-white/[0.035]"
                    >
                        {/* Hover glow */}
                        <div
                            className="pointer-events-none absolute -top-10 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-cyan-400/[0.07] blur-2xl 
                            opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        />

                        <div className="relative flex h-9 w-9 items-center justify-center">
                            <img
                                src={stack.icon}
                                alt={stack.name}
                                className="h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-110"
                                loading="lazy"
                            />
                        </div>

                        <span
                            className="text-center text-xs font-medium text-slate-400 transition-colors duration-200 group-hover:text-slate-200 sm:text-sm"
                        >
                            {stack.name}
                        </span>
                    </div>
                ))}
            </div>

            {/* CTA */}
            <div
                className="mt-12 text-center"
                data-aos="fade-up"
            >
                <Link
                    to="/resources"
                    className="group inline-flex items-center gap-2.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-5 py-2.5 text-sm 
                    font-medium text-slate-300 transition-all duration-200 hover:border-cyan-400/20 hover:bg-cyan-400/[0.06] hover:text-cyan-300 
                    active:scale-95"
                >
                    <GrResources size={15} />

                    <span>Browse Stack Resources</span>

                    <FiArrowRight
                        size={15}
                        className="text-cyan-400 transition-transform duration-200 group-hover:translate-x-1"
                    />
                </Link>
            </div>
        </section>
    );
}