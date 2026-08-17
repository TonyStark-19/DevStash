// import components
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

// react icons
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { FiArrowUpRight, FiPlus, FiX, FiBookOpen, FiYoutube, FiBookmark, FiPlusCircle, FiChevronDown, FiType, FiLink, FiAlignLeft, FiTag } from "react-icons/fi";

// import useState and useEffect
import { useState, useEffect } from "react";

// import use params
import { useParams } from "react-router-dom";

// import axios instance
import api from "../utils/api";

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// import toast
import toast from "react-hot-toast";

// Resource Detail Page Component
export function ResourceDetail() {
    const { category, subcategory } = useParams();
    const [loading, setLoading] = useState(true);
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState(null);
    const [submitting, setSubmitting] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        type: "",
        title: "",
        description: "",
        tags: "",
        link: "",
    });

    // Form logic
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle Form Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true); // Start loader

        const tagsArray = formData.tags.split(",").map(tag => tag.trim()).filter(tag => tag.length > 0);

        if (tagsArray.length < 2 || tagsArray.length > 4) {
            toast.error("Please provide between 2 and 4 tags.");
            return;
        }

        const finalData = { ...formData, tags: tagsArray };

        try {
            const res = await api.post(`/resources/contribute/${category}/${subcategory}`, finalData);
            if (res.status === 201) {
                toast.success("Resource submitted 🚀");
                const refreshed = await api.get(`/resources/${category}/${subcategory}`);
                setData(refreshed.data);
                setIsOpen(false);
                setFormData({ title: "", description: "", tags: "", link: "", type: "" });
            }
        } catch (err) {
            toast.error(err.response?.data?.message || "Error contributing resource");
        } finally {
            setSubmitting(false); // Stop loader
        }
    };

    return (
        <div className="min-h-screen bg-[#030712] font-poppins text-slate-200">
            {/* Ambient Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full opacity-50" />
            </div>

            {/* navbar */}
            <Navbar />

            {/* Contribution Modal */}
            <main className="relative z-10 pb-0">
                <Content
                    loading={loading}
                    setLoading={setLoading}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    data={data}
                    setData={setData}
                    category={category}
                    subcategory={subcategory}
                />
            </main>

            {/* Contribution Modal */}
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* Modal Box */}
                    <div
                        className="relative w-full max-w-lg bg-[#0a0e17] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-cyan-500/5 
                        animate-in fade-in zoom-in-95 duration-200 overflow-hidden"
                    >
                        {/* Subtle Ambient Radial Glow */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

                        {/* Close Button */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center 
                            text-slate-400 hover:text-white hover:bg-white/10 transition-all cursor-pointer"
                        >
                            <FiX size={18} />
                        </button>

                        {/* Header */}
                        <div className="mb-6">
                            <div
                                className="inline-flex items-center gap-1.5 px-2.5 py-1 mb-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 
                                text-cyan-400 text-xs font-semibold uppercase tracking-wider"
                            >
                                <FiPlusCircle size={13} />
                                Contribute
                            </div>

                            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Add New Resource</h3>
                            <p className="text-slate-400 text-xs sm:text-sm mt-1">Share a high-quality link to help the developer community.</p>
                        </div>

                        {/* Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-3.5"
                        >
                            {/* Content Type Select with React Icon */}
                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-slate-400 ml-1 uppercase tracking-wider">Content Type</label>

                                <div className="relative group">
                                    <select
                                        name="type"
                                        value={formData.type}
                                        onChange={handleChange}
                                        required
                                        className="w-full appearance-none bg-white/5 border border-white/10 rounded-xl py-2.5 pl-3.5 pr-10 outline-none 
                                        focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-sm text-white cursor-pointer"
                                    >
                                        <option value="" disabled className="bg-[#0a0e17] text-slate-500">Select content type...</option>
                                        <option value="docs" className="bg-[#0a0e17] text-white">Documentation / Article</option>
                                        <option value="youtube" className="bg-[#0a0e17] text-white">YouTube Video / Course</option>
                                        <option value="tool" className="bg-[#0a0e17] text-white">Dev Tool / Library</option>
                                    </select>

                                    <FiChevronDown
                                        className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none group-hover:text-cyan-400 
                                        transition-colors text-base"
                                    />
                                </div>
                            </div>

                            {/* Resource Title */}
                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-slate-400 ml-1 uppercase tracking-wider">Resource Title</label>

                                <div className="relative">
                                    <FiType className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />

                                    <input
                                        name="title"
                                        type="text"
                                        placeholder="e.g. React 19 Full Architecture Guide"
                                        value={formData.title}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-9 pr-3.5 text-sm outline-none 
                                        focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-white placeholder:text-slate-600"
                                    />
                                </div>
                            </div>

                            {/* URL */}
                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-slate-400 ml-1 uppercase tracking-wider">Resource URL</label>

                                <div className="relative">
                                    <FiLink className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />
                                    <input
                                        name="link"
                                        type="url"
                                        placeholder="https://..."
                                        value={formData.link}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-9 pr-3.5 text-sm outline-none 
                                        focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-white placeholder:text-slate-600"
                                    />
                                </div>
                            </div>

                            {/* Description */}
                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-slate-400 ml-1 uppercase tracking-wider">Description</label>

                                <div className="relative">
                                    <FiAlignLeft className="absolute left-3.5 top-3 text-slate-500 text-sm" />

                                    <textarea
                                        name="description"
                                        placeholder="Brief summary of why this resource is useful..."
                                        rows={3}
                                        value={formData.description}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-9 pr-3.5 text-sm outline-none 
                                        focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-white resize-none 
                                        placeholder:text-slate-600"
                                    />
                                </div>
                            </div>

                            {/* Tags */}
                            <div className="space-y-1">
                                <label className="text-[11px] font-bold text-slate-400 ml-1 uppercase tracking-wider">Tags</label>

                                <div className="relative">
                                    <FiTag className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 text-sm" />

                                    <input
                                        name="tags"
                                        type="text"
                                        placeholder="React, Frontend, State Management"
                                        value={formData.tags}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-9 pr-3.5 text-sm outline-none 
                                        focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all text-white placeholder:text-slate-600"
                                    />
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={submitting}
                                className={`w-full py-3 mt-4 flex items-center justify-center gap-2 text-black font-bold text-sm rounded-xl transition-all 
                                shadow-lg shadow-cyan-500/20 transform hover:scale-[1.01] active:scale-95 
                                    ${submitting
                                        ? 'bg-cyan-600 cursor-not-allowed opacity-75'
                                        : 'bg-cyan-500 hover:bg-cyan-400 cursor-pointer'
                                    }`}
                            >
                                {submitting ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                                        <span>Submitting...</span>
                                    </>
                                ) : (
                                    <>
                                        <FiPlusCircle size={16} />
                                        <span>Submit to Stash</span>
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Footer is conditionally rendered based on loading state */}
            {!loading && <Footer />}
        </div>
    );
}

// Content Component
function Content({ loading, setLoading, isOpen, setIsOpen, data, setData, category, subcategory }) {
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