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
    { name: "HTML5", category: "frontend", icon: "/images/frontend/html5.svg" },
    { name: "CSS3", category: "frontend", icon: "/images/frontend/css3.svg" },
    { name: "JavaScript", category: "frontend", icon: "/images/frontend/javascript.svg" },
    { name: "TypeScript", category: "frontend", icon: "/images/frontend/typescript.svg" },
    { name: "React", category: "frontend", icon: "/images/frontend/react.svg" },
    { name: "Next.js", category: "frontend", icon: "/images/frontend/nextjs.svg" },
    { name: "Vue.js", category: "frontend", icon: "/images/frontend/vue.svg" },
    { name: "Nuxt.js", category: "frontend", icon: "/images/frontend/nuxt.svg" },
    { name: "Angular", category: "frontend", icon: "/images/frontend/angular.svg" },
    { name: "Svelte", category: "frontend", icon: "/images/frontend/svelte.svg" },
    { name: "Bootstrap", category: "frontend", icon: "/images/frontend/bootstrap.svg" },
    { name: "Tailwind CSS", category: "frontend", icon: "/images/frontend/tailwind.svg" },
    { name: "Material UI", category: "frontend", icon: "/images/frontend/materialui.svg" },

    // Backend (/images/backend/)
    { name: "Node.js", category: "backend", icon: "/images/backend/nodejs.svg" },
    { name: "Express", category: "backend", icon: "/images/backend/express.svg" },
    { name: "Django", category: "backend", icon: "/images/backend/django.svg" },
    { name: "Flask", category: "backend", icon: "/images/backend/flask.svg" },
    { name: "Ruby on Rails", category: "backend", icon: "/images/backend/rubyonrails.svg" },
    { name: "Laravel", category: "backend", icon: "/images/backend/laravel.svg" },
    { name: "FastAPI", category: "backend", icon: "/images/backend/fastapi.svg" },

    // Database (/images/database/)
    { name: "MongoDB", category: "database", icon: "/images/database/mongodb.svg" },
    { name: "MySQL", category: "database", icon: "/images/database/mysql.svg" },
    { name: "PostgreSQL", category: "database", icon: "/images/database/postgresql.svg" },
    { name: "SQLite", category: "database", icon: "/images/database/sqlite.svg" },
    { name: "Redis", category: "database", icon: "/images/database/redis.svg" },
    { name: "Firebase", category: "database", icon: "/images/database/firebase.svg" },

    // Programming Languages (/images/programming/)
    { name: "C", category: "programming", icon: "/images/programming/c.svg" },
    { name: "C++", category: "programming", icon: "/images/programming/cplusplus.svg" },
    { name: "Python", category: "programming", icon: "/images/programming/python.svg" }, +
    { name: "Java", category: "programming", icon: "/images/programming/java.svg" },
    { name: "Go", category: "programming", icon: "/images/programming/golang.svg" },
    { name: "Rust", category: "programming", icon: "/images/programming/rust.svg" },
    { name: "PHP", category: "programming", icon: "/images/programming/php.svg" },
    { name: "Ruby", category: "programming", icon: "/images/programming/ruby.svg" },
    { name: "Kotlin", category: "programming", icon: "/images/programming/kotlin.svg" },
    { name: "Swift", category: "programming", icon: "/images/programming/swift.svg" },
    { name: "Scala", category: "programming", icon: "/images/programming/scala.svg" },

    // DevOps & Cloud (/images/VersionControlAndDevOps/ & /images/CloudAndHosting/)
    { name: "Git", category: "devops", icon: "/images/VersionControlAndDevOps/git.svg" },
    { name: "GitHub", category: "devops", icon: "/images/VersionControlAndDevOps/github.svg" },
    { name: "GitLab", category: "devops", icon: "/images/VersionControlAndDevOps/gitlab.svg" },
    { name: "Docker", category: "devops", icon: "/images/VersionControlAndDevOps/docker.svg" },
    { name: "Kubernetes", category: "devops", icon: "/images/VersionControlAndDevOps/kubernetes.svg" },
    { name: "Jenkins", category: "devops", icon: "/images/VersionControlAndDevOps/jenkins.svg" },
    { name: "AWS", category: "devops", icon: "/images/CloudAndHosting/aws.svg" },
    { name: "Azure", category: "devops", icon: "/images/CloudAndHosting/azure.svg" },
    { name: "Google Cloud", category: "devops", icon: "/images/CloudAndHosting/gcp.svg" },
    { name: "Vercel", category: "devops", icon: "/images/CloudAndHosting/vercel.svg" },
    { name: "Heroku", category: "devops", icon: "/images/CloudAndHosting/heroku.svg" },
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
            <div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
                data-aos="fade-up"
            >
                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md text-center">
                    <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-1">
                        45+
                    </div>

                    <div className="text-xs uppercase tracking-wider font-semibold text-slate-400">Tech Stacks</div>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md text-center">
                    <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">
                        150+
                    </div>

                    <div className="text-xs uppercase tracking-wider font-semibold text-slate-400">Vetted Resources</div>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md text-center">
                    <div className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 mb-1">
                        6
                    </div>

                    <div className="text-xs uppercase tracking-wider font-semibold text-slate-400">Core Domains</div>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-md text-center">
                    <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">
                        100%
                    </div>

                    <div className="text-xs uppercase tracking-wider font-semibold text-slate-400">Community Free</div>
                </div>
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