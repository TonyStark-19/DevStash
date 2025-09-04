// import components
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

// import useState and useEffect
import { useState, useEffect } from "react";

// react icons
import { FaBookmark } from "react-icons/fa";

// import axios instance
import api from "../api";

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// saved resources page
export function SavedResources() {
    return (
        <>
            <div className="min-h-screen"
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

    // AOS animations
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    // loading
    if (loading) return <div className="h-screen"></div>;

    return (
        <div className="py-8 text-white/80 font-poppins h-full flex flex-col items-center min-b:pt-20 max-b:pt-10">
            <h1 className="text-center mb-3 font-semibold border-b-2 border-white/30 min-a:w-[70%] max-a:w-[80%]
            min-b:text-5xl max-b:text-[40px] min-b:pb-10 max-b:pb-5 max-c:w-[90%] max-d:text-[35px]"
                data-aos="fade-up">Saved Resources</h1>

            <div className="flex flex-col gap-8 min-h-60 min-a:w-[70%] max-a:w-[80%] max-c:w-[90%] min-b:my-10 max-b:mt-5
            max-b:mb-10">
                {savedResources.length === 0 ? (
                    <p className="text-gray-400 text-center min-e:text-[20px] max-e:text-[18px] min-e:tracking-wide
                    max-e:tracking-normal" data-aos="fade-up">No saved resources yet :(</p>
                ) : (
                    savedResources.map((res, idx) => (
                        <div
                            key={idx}
                            data-aos="fade-up"
                            className="bg-[#06B6D440]/40 hover:bg-[#06B6D440]/60 duration-300 rounded-2xl p-6 w-full relative
                            shadow-lg shadow-cyan-500/10"
                        >
                            {/* Logo */}
                            <img
                                src={res.image}
                                alt={res.title}
                                className="w-10 h-auto mb-5"
                            />

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

                            {/* Tags */}
                            <div className="flex flex-row flex-wrap gap-2.5 min-b:absolute min-b:top-8 min-b:right-6 max-b:bottom-6
                            max-b:left-6 max-b:max-w-[80%] max-b:flex-wrap max-b:mt-5">
                                {res.tags.map((tag, index) => (
                                    <div
                                        key={index}
                                        className="bg-[#06B6D440]/40 rounded-lg py-1 px-3 text-sm"
                                    >
                                        {tag}
                                    </div>
                                ))}
                            </div>

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