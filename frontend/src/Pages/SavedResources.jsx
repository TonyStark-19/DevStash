// import components
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

// import useState and useEffect
import { useState, useEffect } from "react";

// react icons
import { FaBookmark } from "react-icons/fa";

// import axios instance
import api from "../api";

// saved resources page
export function SavedResources() {
    return (
        <>
            <div className="min-h-screen overflow-hidden"
                style={{
                    background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000000",
                }}>
                <Navbar />
                <div>
                    <Content />
                </div>
                <Footer />
            </div>
        </>
    )
}

// content
function Content() {
    const [savedResources, setSavedResources] = useState([]);
    const [loading, setLoading] = useState(true);

    // fetch saved resources from backend
    useEffect(() => {
        const fetchSavedResources = async () => {
            try {
                const res = await api.get("/saved-resources/saved");
                setSavedResources(res.data);
            } catch (err) {
                console.error("Error fetching saved resources:", err.response?.data || err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchSavedResources();
    }, []);

    // handle removal of resources
    const handleRemove = async (resourceId, type, itemId) => {
        try {
            await api.post(`/saved-resources/unsave/${resourceId}`, { type, itemId });
            setSavedResources((prev) =>
                prev.filter(
                    (item) =>
                        !(item.resourceId === resourceId && item.type === type && item.itemId === itemId)
                )
            );
        } catch (err) {
            console.error("Error unsaving resource:", err.response?.data || err.message);
        }
    };

    // // loading
    // if (loading) return <p className="text-white">Loading...</p>;

    return (
        <div className="py-8 text-white/80 font-poppins h-full pt-20 flex flex-col items-center">
            <h1 className="text-5xl text-center mb-3 font-semibold pb-10 border-b-2 border-white/30 w-[70%]">Saved Resources</h1>

            <div className="w-[70%] my-10 flex flex-col gap-8 min-h-60">
                {savedResources.length === 0 ? (
                    <p className="text-gray-400 text-center text-[18px]">No saved resources yet :(</p>
                ) : (
                    savedResources.map((res, idx) => (
                        <div
                            key={idx}
                            className="bg-[#06B6D440]/40 hover:bg-[#06B6D440]/60 duration-300 rounded-2xl p-6 w-full relative
                            shadow-lg shadow-cyan-500/10"
                        >
                            {/* Logo */}
                            <img
                                src={res.image}
                                alt={res.title}
                                className="w-10 h-auto mb-5"
                            />

                            {/* Tags */}
                            <div className="flex flex-row flex-wrap gap-2.5 absolute top-8 right-6">
                                {res.tags.map((tag, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#06B6D440]/40 rounded-lg py-1 px-3 text-sm"
                                    >
                                        {tag}
                                    </div>
                                ))}
                            </div>

                            {/* Title + Description */}
                            <h1 className="text-[22px] font-semibold mb-3">{res.title}</h1>
                            <p className="text-[17px]">{res.description}</p>

                            {/* CTA */}
                            <a
                                href={res.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block text-blue-400 hover:text-blue-300 text-[15px] mt-4 cursor-pointer"
                            >
                                Visit Resource →
                            </a>

                            {/* Save button */}
                            <button
                                onClick={() => handleRemove(res.resourceId, res.type, res.itemId)}
                                className="text-blue-400 absolute right-6 bottom-6 text-xl cursor-pointer"
                            >
                                <FaBookmark />
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}