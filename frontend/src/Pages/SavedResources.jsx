// import components
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

// import useState and useEffect
import { useState, useEffect } from "react";

// react icons
import { FaBookmark } from "react-icons/fa";
import { FiExternalLink, FiSearch, FiLayers } from "react-icons/fi";

// import axios instance
import api from "../utils/api";

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// import toast
import toast from "react-hot-toast";

// Saved Resources Page Component
export function SavedResources() {
    const [loading, setLoading] = useState(true);

    return (
        <div className="min-h-screen bg-[#030712] font-poppins text-slate-200">
            {/* Consistent Ambient Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full" />
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full" />
            </div>

            <Navbar />
            <main className="relative z-10 pb-20">
                <Content loading={loading} setLoading={setLoading} />
            </main>
            {/* Footer is conditionally rendered based on loading state */}
            {!loading && <Footer />}
        </div>
    );
}

// Content Component
function Content({ loading, setLoading }) {
    const [savedResources, setSavedResources] = useState([]);

    // Fetch Saved Resources on Mount
    useEffect(() => {
        const fetchSavedResources = async () => {
            try {
                const res = await api.get("/saved-resources/saved");
                setSavedResources(res.data);
            } catch (err) {
                toast.error("Failed to fetch saved resources");
            } finally {
                setLoading(false);
            }
        };
        fetchSavedResources();
    }, []);

    // Handle Remove from Saved Resources
    const handleRemove = async (resourceId, type, itemId) => {
        try {
            await api.post(`/saved-resources/unsave/${resourceId}`, { type, itemId });
            setSavedResources((prev) =>
                prev.filter((item) => !(item.resourceId === resourceId && item.itemId === itemId))
            );
            toast.success("Bookmark removed");
        } catch (err) {
            toast.error("Error removing bookmark");
        }
    };

    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    // Loading State
    if (loading) return (
        <div className="h-[80vh] flex items-center justify-center">
            <div className="w-10 h-10 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
    );

    return (
        <div className="max-w-5xl mx-auto px-6 pt-16">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16" data-aos="fade-down">
                <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                        Your <span className="text-cyan-400">Stash</span>
                    </h1>
                    <p className="text-slate-400">Your personal collection of learning materials.</p>
                </div>
                <div className="text-sm font-medium text-slate-500 uppercase tracking-widest">
                    {savedResources.length} Saved Items
                </div>
            </div>

            {/* Content List */}
            <div className="space-y-6">
                {savedResources.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-20 bg-white/5 border border-white/10 rounded-[2rem] text-center" data-aos="zoom-in">
                        <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
                            <FiLayers className="text-slate-500 text-2xl" />
                        </div>
                        <h2 className="text-xl font-semibold text-white mb-2">Your stash is empty</h2>
                        <p className="text-slate-400 mb-8 max-w-xs mx-auto">
                            Start exploring our curated resources and save your favorites here.
                        </p>
                        <Link to="/resources" className="px-8 py-3 bg-cyan-500 text-black font-bold rounded-full hover:bg-cyan-400 transition-all hover:scale-105">
                            Browse Resources
                        </Link>
                    </div>
                ) : (
                    savedResources.map((res, idx) => (
                        <div
                            key={idx}
                            data-aos="fade-up"
                            className="group relative w-full bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/[0.08]
                            hover:border-cyan-500/30 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row gap-6 items-start">
                                {/* Thumbnail */}
                                <div className="w-14 h-14 rounded-2xl bg-white/10 p-3 flex-shrink-0 border border-white/10">
                                    <img src={res.image} alt="" className="w-full h-full object-contain" />
                                </div>

                                {/* Content Details */}
                                <div className="flex-1">
                                    <div className="flex justify-between items-start gap-4 mb-2">
                                        <div>
                                            <span className="text-[10px] font-bold text-cyan-500 uppercase tracking-tighter mb-1 block">
                                                {res.type === 'youtube' ? 'Video Tutorial' : 'Article / Documentation'}
                                            </span>
                                            <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                                {res.title}
                                            </h3>
                                        </div>
                                        <button
                                            onClick={() => handleRemove(res.resourceId, res.type, res.itemId)}
                                            className="p-2 text-cyan-400 bg-cyan-400/10 rounded-xl hover:bg-red-500/20 hover:text-red-400 transition-all
                                            cursor-pointer group/btn"
                                            title="Remove from stash"
                                        >
                                            <FaBookmark />
                                        </button>
                                    </div>

                                    <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 line-clamp-2 max-w-3xl">
                                        {res.description}
                                    </p>

                                    <div className="flex flex-wrap items-center gap-3">
                                        {res.tags?.map((tag, i) => (
                                            <span key={i} className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-white/5
                                            text-slate-400 border border-white/10">
                                                {tag}
                                            </span>
                                        ))}
                                        <a
                                            href={res.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="ml-auto flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-400 transition-all"
                                        >
                                            OPEN RESOURCE <FiExternalLink />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}