// import icons
import { FiPlusCircle, FiSearch, FiArrowUpRight } from "react-icons/fi";

// import usestate
import { useState, useEffect } from "react";

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// import link
import { Link } from "react-router-dom";

// import axios instanse
import api from "../../utils/api";

// resource grid component
export default function ResourceGrid({ loading, setLoading }) {
    const [resources, setResources] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    // Category Labels
    const labels = {
        frontend: "Frontend",
        backend: "Backend",
        databases: "Databases",
        programming: "Programming Languages",
        devOps: "Version Control & DevOps",
        cloud: "Cloud & Hosting",
    };

    // Fetch Resources on Mount
    useEffect(() => {
        const fetchResources = async () => {
            try {
                const res = await api.get("/allresources");
                setResources(res.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchResources();
    }, []);

    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    // Loading State
    if (loading) return (
        <div className="flex flex-col items-center justify-center h-[80vh]">
            <div className="w-12 h-12 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
            <p className="mt-4 text-slate-400 animate-pulse">Fetching resources...</p>
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-0">
            {/* Header Section */}
            <div
                className="text-center mb-16"
                data-aos="fade-down"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">
                    Curated <span className="text-cyan-400">Knowledge</span>
                </h1>

                <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                    Hand-picked tutorials and tools to help you build better software.
                </p>

                {/* Subtle Search Bar */}
                <div className="relative max-w-md mx-auto">
                    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

                    <input
                        type="text"
                        placeholder="Search resources..."
                        className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-12 focus:outline-none focus:border-cyan-500/50 transition-all"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Category Mapping */}
            {Object.entries(resources).map(([categoryKey, items]) => {
                // Search filter logic
                const filteredItems = items.filter((res) =>
                    res.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    res.subcategory.toLowerCase().includes(searchTerm.toLowerCase())
                );

                // If no items match in this category, do not render the section
                if (filteredItems.length === 0) return null;

                return (
                    <section
                        key={categoryKey}
                        className="mb-16 md:mb-20"
                        data-aos="fade-up"
                    >
                        {/* Section Category Header */}
                        <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                            <div className="flex items-center gap-3 flex-shrink-0">
                                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                                    {labels[categoryKey] || categoryKey}
                                </h2>

                                {/* Item Count Badge */}
                                <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold">
                                    {filteredItems.length}
                                </span>
                            </div>

                            <div className="h-px flex-1 bg-gradient-to-r from-white/15 via-white/5 to-transparent" />
                        </div>

                        {/* Resource Card Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 md:gap-4">
                            {filteredItems.map((res, i) => (
                                <Link
                                    to={`/resources/${categoryKey}/${res.subcategory}`}
                                    key={res.subcategory || i}
                                    className="group relative p-5 md:p-6 bg-white/[0.02] border border-white/10 rounded-2xl hover:bg-white/[0.05] 
                                    hover:border-cyan-500/40 transition-all duration-300 flex flex-col items-center justify-between gap-3 overflow-hidden 
                                    transform hover:-translate-y-1 shadow-lg shadow-black/20"
                                >
                                    {/* Hover Top Glow */}
                                    <div
                                        className="absolute -top-12 -right-12 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 
                                        transition-all pointer-events-none"
                                    />

                                    {/* Top corner external link indicator */}
                                    <div className="w-full flex justify-end">
                                        <FiArrowUpRight
                                            size={14}
                                            className="text-slate-600 group-hover:text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-200 
                                            -translate-x-1 group-hover:translate-x-0"
                                        />
                                    </div>

                                    {/* Logo Image */}
                                    <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center p-1">
                                        <img
                                            src={res.src}
                                            alt={res.alt || res.name}
                                            loading="lazy"
                                            className="w-full h-full object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 
                                            group-hover:scale-110 transition-all duration-300"
                                        />
                                    </div>

                                    {/* Stack Name */}
                                    <span
                                        className="text-xs md:text-sm font-semibold tracking-wide text-slate-400 group-hover:text-white transition-colors 
                                        text-center truncate max-w-full"
                                    >
                                        {res.name}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </section>
                );
            })}

            {/* Modern CTA */}
            <div
                className="mt-12 p-10 md:p-12 rounded-3xl bg-gradient-to-b from-white/[0.06] to-transparent border border-white/10 text-center 
                relative overflow-hidden max-[380px]:px-6 group"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-offset="100"
            >
                {/* Subtle Ambient Radial Glow */}
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-cyan-500/10 blur-3xl pointer-events-none 
                    group-hover:bg-cyan-500/20 transition-all duration-500"
                />

                <div className="relative z-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                        Missing something?
                    </h2>

                    <p className="text-slate-400 text-sm md:text-base mb-8 max-w-md mx-auto leading-relaxed">
                        Help us grow the stash. If there's a tool or tutorial we missed, let the community know.
                    </p>

                    <a
                        href="https://github.com/TonyStark-19/DevStash/issues/new?template=resource-suggestion.md"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-500 hover:bg-cyan-400 text-black font-semibold text-sm 
                        rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/20 
                        max-[400px]:px-6 cursor-pointer"
                    >
                        <FiPlusCircle className="text-base" />
                        Suggest a Resource
                    </a>
                </div>
            </div>
        </div>
    );
}