// import icons
import { FiX, FiPlusCircle, FiChevronDown, FiType, FiLink, FiAlignLeft, FiTag } from "react-icons/fi";

// contribute resource component
export default function ContributeResource({ setIsOpen, handleSubmit, formData, handleChange, submitting }) {
    return (
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
    )
}