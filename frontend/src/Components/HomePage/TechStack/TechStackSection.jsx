// import usestate
import { useState } from "react";

// impor icons
import { FiCpu, FiLayers, FiServer, FiDatabase, FiTerminal, FiCloud, FiArrowRight } from "react-icons/fi";
import { GrResources } from "react-icons/gr";

// import link
import { Link } from "react-router-dom";

// categories data
const categories = [
    { id: "all", name: "All Stacks", icon: FiLayers },
    { id: "frontend", name: "Frontend", icon: FiLayers },
    { id: "backend", name: "Backend", icon: FiServer },
    { id: "database", name: "Databases", icon: FiDatabase },
    { id: "programming", name: "Languages", icon: FiTerminal },
    { id: "devops", name: "DevOps & Cloud", icon: FiCloud }
];

// tech stack data
const techStacks = [
    // Frontend (/images/frontend/)
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

    // Backend (/images/backend/)
    { name: "Node.js", category: "backend", icon: "/images/backend/Node.js.svg" },
    { name: "Express", category: "backend", icon: "/images/backend/Express.svg" },
    { name: "Django", category: "backend", icon: "/images/backend/Django.svg" },
    { name: "Flask", category: "backend", icon: "/images/backend/Flask.svg" },
    { name: "Ruby on Rails", category: "backend", icon: "/images/backend/RubyOnRails.svg" },
    { name: "Laravel", category: "backend", icon: "/images/backend/Laravel.svg" },
    { name: "FastAPI", category: "backend", icon: "/images/backend/FastAPI.svg" },

    // Database (/images/database/)
    { name: "MongoDB", category: "database", icon: "/images/database/MongoDB.svg" },
    { name: "MySQL", category: "database", icon: "/images/database/MySQL.svg" },
    { name: "PostgreSQL", category: "database", icon: "/images/database/PostgreSQL.svg" },
    { name: "SQLite", category: "database", icon: "/images/database/SQLite.svg" },
    { name: "Redis", category: "database", icon: "/images/database/Redis.svg" },
    { name: "Firebase", category: "database", icon: "/images/database/Firebase.svg" },

    // Programming Languages (/images/programming/)
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

    // DevOps & Cloud (/images/VersionControlAndDevOps/ & /images/CloudAndHosting/)
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

// metrices data
const metrics = [
    {
        style: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400",
        count: "45+",
        title: "Tech Stacks"
    },
    {
        style: "text-white",
        count: "150+",
        title: "Vetted Resources"
    },
    {
        style: "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400",
        count: "6",
        title: "Core Domains"
    },
    {
        style: "text-white",
        count: "100%",
        title: "Community Free"
    }
];

// tech stack section
export default function TechStackSection() {
    const [activeTab, setActiveTab] = useState("all");

    // filtered stacks
    const filteredStacks = activeTab === "all"
        ? techStacks
        : techStacks.filter(item => item.category === activeTab);

    return (
        <section className="relative z-10 py-24 px-6 max-w-6xl mx-auto border-t-2 border-white/5">
            {/* Section Header */}
            <div
                className="text-center mb-12"
                data-aos="fade-up"
            >
                <div
                    className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 
                    text-xs font-semibold uppercase tracking-widest"
                >
                    <FiCpu className="text-sm" />
                    Stack Ecosystem
                </div>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight leading-16">
                    Covering Every Layer of <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        Modern Software Engineering
                    </span>
                </h2>

                <p className="max-w-2xl mx-auto text-slate-400 text-sm md:text-base">
                    From frontend frameworks and backend runtimes to cloud platforms and databases — discover curated guides and tools across your entire stack.
                </p>
            </div>

            {/* Metrics Bar */}
            {/* Metrics Bar */}
            <div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
                data-aos="fade-up"
            >
                {metrics.map((metric, idx) => (
                    <div
                        key={idx}
                        className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md text-center"
                    >
                        <div className={`text-3xl md:text-4xl font-extrabold ${metric.style} mb-1`}>
                            {metric.count}
                        </div>

                        <div className="text-xs uppercase tracking-wider font-semibold text-slate-400">{metric.title}</div>
                    </div>
                ))}
            </div>

            {/* Category Tabs */}
            <div
                className="flex flex-wrap items-center justify-center gap-2 mb-10"
                data-aos="fade-up"
            >
                {categories.map((cat) => {
                    const IconComponent = cat.icon;
                    const isActive = activeTab === cat.id;

                    return (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className={`px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer
                                ${isActive
                                    ? "bg-cyan-500 text-black font-semibold shadow-lg shadow-cyan-500/20"
                                    : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5"
                                }`}
                        >
                            <IconComponent size={15} />
                            {cat.name}
                        </button>
                    );
                })}
            </div>

            {/* SVG Badges Grid */}
            <div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3.5"
                data-aos="fade-up"
            >
                {filteredStacks.map((stack, index) => (
                    <div
                        key={index}
                        className="group p-4 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md flex flex-col items-center justify-center 
                        gap-3 hover:border-cyan-500/40 hover:bg-white/[0.05] transition-all duration-300 transform hover:-translate-y-1"
                    >
                        <div className="w-10 h-10 flex items-center justify-center">
                            <img
                                src={stack.icon}
                                alt={stack.name}
                                className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
                                loading="lazy"
                            />
                        </div>

                        <span className="text-xs md:text-sm font-medium text-slate-300 group-hover:text-white transition-colors text-center">
                            {stack.name}
                        </span>
                    </div>
                ))}
            </div>

            {/* Browse All Resources Button */}
            <div className="mt-12 text-center" data-aos="fade-up">
                <Link to="/resources">
                    <button
                        className="group inline-flex items-center gap-2.5 px-8 py-3.5 bg-white/5 hover:bg-cyan-500/10 border border-white/10 
                        hover:border-cyan-500/30 text-white hover:text-cyan-400 font-semibold text-sm rounded-full transition-all duration-300 
                        transform active:scale-95 shadow-lg shadow-black/20 cursor-pointer"
                    >
                        <GrResources className="text-base group-hover:text-cyan-400 transition-colors" />
                        Browse All Stack Resources
                        <FiArrowRight className="group-hover:translate-x-1 text-cyan-400 transition-transform" />
                    </button>
                </Link>
            </div>
        </section>
    );
}