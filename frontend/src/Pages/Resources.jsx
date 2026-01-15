// import components
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

// import use state and use effect
import { useState, useEffect } from "react";

// import link
import { Link } from "react-router-dom";

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// import axios instanse
import api from "../utils/api";

// import icons
import { FiPlusCircle, FiSearch } from "react-icons/fi";

// Resources Page Component
export function Resources() {
    const [loading, setLoading] = useState(true);

    return (
        <div className="min-h-screen bg-[#030712] font-poppins text-slate-200">
            {/* Consistent Background Glow */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full" />
            </div>

            <Navbar />
            <main className="relative z-10">
                <Content loading={loading} setLoading={setLoading} />
            </main>
            {/* Footer is conditionally rendered based on loading state */}
            {!loading && <Footer />}
        </div>
    );
}

// Content Component
function Content({ loading, setLoading }) {
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
        <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Header Section */}
            <div className="text-center mb-16" data-aos="fade-down">
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
                        placeholder="Search categories..."
                        className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-12 focus:outline-none focus:border-cyan-500/50 transition-all"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>

            {/* Category Mapping */}
            {Object.entries(resources).map(([categoryKey, items]) => {
                // Simple search filter logic
                if (searchTerm && !labels[categoryKey]?.toLowerCase().includes(searchTerm.toLowerCase())) return null;

                return (
                    <section key={categoryKey} className="mb-20" data-aos="fade-up">
                        <div className="flex items-center gap-4 mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-white flex-shrink-0">
                                {labels[categoryKey] || categoryKey}
                            </h2>
                            <div className="h-[1px] w-full bg-gradient-to-r from-white/20 to-transparent"></div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {items.map((res, i) => (
                                <Link
                                    to={`/resources/${categoryKey}/${res.subcategory}`}
                                    key={i}
                                    className="group relative p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10
                                    hover:border-cyan-500/30 transition-all duration-300 flex flex-col items-center gap-4 overflow-hidden"
                                >
                                    {/* Hover Glow Effect */}
                                    <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <div className="relative z-10 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center p-2">
                                        <img
                                            src={res.src}
                                            alt={res.alt}
                                            className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                                        />
                                    </div>
                                    <div className="relative z-10 uppercase text-xs font-bold tracking-widest text-slate-400
                                    group-hover:text-white transition-colors">
                                        {res.name}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                );
            })}

            {/* Modern CTA */}
            <div
                className="mt-12 p-12 rounded-3xl bg-gradient-to-b from-white/10 to-transparent border border-white/10 text-center relative overflow-hidden"
                data-aos="zoom-in"
            >
                <div className="relative z-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Missing something?</h2>
                    <p className="text-slate-400 mb-8 max-w-md mx-auto">
                        Help us grow the stash. If there's a tool or tutorial we missed, let the community know.
                    </p>
                    <a
                        href="https://github.com/TonyStark-19/DevStash/issues/new?template=resource-suggestion.md"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-cyan-500 text-black font-bold rounded-full hover:bg-cyan-400 transition-all
                        hover:scale-105"
                    >
                        <FiPlusCircle />
                        Suggest a Resource
                    </a>
                </div>
            </div>
        </div>
    );
}