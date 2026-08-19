// react icons
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { FiArrowUpRight, FiPlus } from "react-icons/fi";

// import usestate and useeffect
import { useState, useEffect } from "react";

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// import axios instance
import api from "../../utils/api";

// import toast
import toast from "react-hot-toast";

// resource component
export default function Resources({ loading, setLoading, isOpen, setIsOpen, data, setData, category, subcategory }) {
    const [savedResources, setSavedResources] = useState([]);

    // Pretty heading map
    const headingMap = {
        "html": "HTML", "css": "CSS", "javascript": "JavaScript", "typescript": "TypeScript",
        "react": "React", "nextjs": "Next JS", "nodejs": "Node JS", "fastapi": "Fast API"
    };
    const customHeading = headingMap[subcategory] || subcategory;

    // Fetch Resource Data
    useEffect(() => {
        setLoading(true);
        api.get(`/resources/${category}/${subcategory}`)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, [category, subcategory]);

    // Fetch Saved Resources
    useEffect(() => {
        const fetchSaved = async () => {
            try {
                const res = await api.get("/saved-resources/saved");
                setSavedResources(res.data);
            } catch (err) { console.error(err); }
        };
        fetchSaved();
    }, []);

    // Initialize AOS
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    // Handle Save/Unsave Resource
    const handleSave = async (resourceId, type, itemId) => {
        try {
            const exists = savedResources.some(item =>
                item.resourceId === resourceId && item.type === type && item.itemId === itemId
            );

            if (exists) {
                await api.post(`/saved-resources/unsave/${resourceId}`, { type, itemId });
                setSavedResources(prev => prev.filter(item => !(item.resourceId === resourceId && item.itemId === itemId)));
                toast.success("Removed from bookmarks");
            } else {
                await api.post(`/saved-resources/save/${resourceId}`, { type, itemId });
                setSavedResources(prev => [...prev, { resourceId, type, itemId }]);
                toast.success("Saved to bookmarks");
            }
        } catch (err) { toast.error("Action failed"); }
    };

    // Loading and Error States
    if (loading) return <div className="h-[80vh] flex flex-col items-center justify-center">
        <div className="w-10 h-10 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-slate-400 animate-pulse">Fetching resources for {customHeading}</p></div>;
    if (!data) return <div className="h-[60vh] flex items-center justify-center text-red-400">Resource not found</div>;

    return (
        <div className="max-w-5xl mx-auto px-6 pt-16">
            {/* Header Section */}
            <div
                className="text-center mb-20"
                data-aos="fade-down"
            >
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 capitalize tracking-tight">
                    {customHeading} <span className="text-cyan-400">Mastery</span>
                </h1>

                <div className="h-1 w-24 bg-cyan-500 mx-auto rounded-full" />
            </div>

            {/* Resource Groups */}
            {['docs', 'youtube'].map((type) => (
                <section
                    key={type}
                    className="mb-24"
                >
                    <div
                        className="flex items-center gap-4 mb-10"
                        data-aos="fade-right"
                    >
                        <h2 className="text-2xl font-bold text-white uppercase tracking-widest">
                            {type === 'docs' ? 'Official Docs & Articles' : 'Video Tutorials'}
                        </h2>

                        <div className="flex-1 h-px bg-white/10" />
                    </div>

                    <div className="space-y-6">
                        {data.resources[type].map((res, idx) => (
                            <div
                                key={idx}
                                data-aos="fade-up"
                                className="group relative w-full bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 hover:bg-white/[0.08]
                                hover:border-cyan-500/30 transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row gap-6 items-start">
                                    {/* Icon/Image */}
                                    <div className="w-14 h-14 rounded-2xl bg-white/5 p-3 flex-shrink-0 border border-white/10">
                                        <img
                                            src={res.image}
                                            alt={res.title} className="w-full h-full object-contain"
                                        />
                                    </div>

                                    <button
                                        onClick={() => handleSave(data._id, type, res._id)}
                                        className="text-2xl text-slate-500 hover:text-cyan-400 transition-colors cursor-pointer
                                        absolute top-8 right-8"
                                        title="Save to stash"
                                    >
                                        {savedResources.some(item => item.itemId === res._id)
                                            ? <FaBookmark className="text-cyan-500" />
                                            : <CiBookmark />
                                        }
                                    </button>

                                    {/* Content */}
                                    <div className="flex-1 max-[900px]:w-full">
                                        <div className="flex items-start gap-2 mb-2">
                                            <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                                {res.title}
                                            </h3>
                                        </div>

                                        <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 max-w-3xl">
                                            {res.description}
                                        </p>

                                        <div
                                            className="flex justify-between items-center gap-3 max-[900px]:flex-col max-[900px]:items-start
                                            max-[900px]:gap-6 max-[900px]:w-full"
                                        >
                                            <div className="flex items-center gap-2 flex-wrap">
                                                {res.tags.map((tag, i) => (
                                                    <span
                                                        key={i}
                                                        className="text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-full bg-cyan-500/10
                                                        text-cyan-400 border border-cyan-500/20"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            <a
                                                href={res.link}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="flex items-center gap-2 text-sm font-bold text-white hover:text-cyan-400 transition-colors
                                                max-[900px]:self-end"
                                            >
                                                EXPLORE <FiArrowUpRight />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            ))}

            {/* Bottom CTA Card */}
            <div
                className="relative overflow-hidden bg-gradient-to-br from-cyan-500/20 via-cyan-950/10 to-transparent border border-cyan-500/20 
                rounded-3xl p-8 md:p-10 text-center group"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-offset="100"
            >
                {/* Subtle Ambient Hover Glow */}
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-cyan-500/10 blur-3xl pointer-events-none group-hover:bg-cyan-500/20 
                    transition-all duration-500"
                />

                <div className="relative z-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">
                        Know a better resource?
                    </h2>

                    <p className="text-slate-400 text-sm md:text-base mb-8 max-w-md mx-auto leading-relaxed">
                        Share the tools that helped you and contribute to the collective developer growth.
                    </p>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="flex items-center gap-2 mx-auto px-8 py-3 bg-white hover:bg-slate-100 text-black font-semibold text-sm rounded-full 
                        transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg shadow-white/10 cursor-pointer"
                    >
                        <FiPlus className="text-base" /> Contribute Now
                    </button>
                </div>
            </div>
        </div>
    );
}