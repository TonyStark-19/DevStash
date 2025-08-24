// import components
import { Footer } from "../Components/Footer";

// react icons
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";

// import useState and useEffect
import { useState, useEffect } from "react";

// import use params
import { useParams } from "react-router-dom";

// resource page
export function ResourceDetail() {
    return (
        <div
            className="h-screen overflow-y-scroll scrollbar-transparent"
            style={{
                background:
                    "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000000",
            }}
        >
            <div>
                <Content />
            </div>
            <Footer />
        </div>
    );
}

// content
function Content() {
    const { subcategory } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [savedResources, setSavedResources] = useState([]);

    // fetch resources from DB
    useEffect(() => {
        fetch(`http://localhost:3000/api/resources/${subcategory}`)
            .then((res) => res.json())
            .then((json) => {
                setData(json);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, [subcategory]);

    // handle save
    const handleSave = (resource, type) => {
        const cleanResource = {
            id: `${type}-${resource.id}`,
            title: resource.title,
            description: resource.description,
            image: resource.image,
            tags: resource.tags,
            link: resource.link,
        };

        setSavedResources((prev) => {
            const exists = prev.find((item) => item.id === cleanResource.id);
            if (exists) {
                return prev.filter((item) => item.id !== cleanResource.id);
            } else {
                return [...prev, cleanResource];
            }
        });
    };

    // hydrate saved resources from localStorage
    useEffect(() => {
        const stored = localStorage.getItem("savedResources");
        if (stored) {
            setSavedResources(JSON.parse(stored));
        }
    }, []);

    // update localStorage when savedResources changes
    useEffect(() => {
        localStorage.setItem("savedResources", JSON.stringify(savedResources));
    }, [savedResources]);

    if (loading) return <p className="text-white">Loading...</p>;
    if (!data) return <p className="text-red-500">No resources found</p>;

    // resources
    const { resources } = data;

    return (
        <div className="py-8 text-white/80 font-poppins h-full pt-20 flex flex-col items-center">
            {/* Page heading */}
            <div className="w-[70%] text-center">
                <h1 className="text-4xl mb-3 font-semibold leading-12 pb-10 border-b-2 border-white/30">
                    {subcategory.toUpperCase()} Resources
                </h1>
            </div>

            {/* Resources Section */}
            <div className="w-[70%] mt-15">
                <h2 className="text-3xl font-semibold mb-6">Docs & Articles :</h2>

                <div className="flex flex-col gap-10 border-b-2 border-b-white/30 pb-10">
                    {resources.docs.map((res, idx) => (
                        <div
                            key={`docs-${res.id || idx}`}
                            className="bg-[#06B6D440]/40 hover:bg-[#06B6D440]/60 duration-300 rounded-2xl p-6 w-full relative shadow-lg shadow-cyan-500/10"
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
                                onClick={() => handleSave(res, "docs")}
                                className="text-blue-400 absolute right-6 bottom-6 text-xl"
                            >
                                {savedResources.some((item) => item.id === `docs-${res.id}`) ? (
                                    <FaBookmark />
                                ) : (
                                    <CiBookmark />
                                )}
                            </button>
                        </div>
                    ))}
                </div>

                <h2 className="text-3xl font-semibold mt-18 mb-6">Youtube Resources :</h2>

                <div className="flex flex-col gap-10 border-b-2 border-b-white/30 pb-10">
                    {resources.youtube.map((res, idx) => (
                        <div
                            key={`youtube-${res.id || idx}`}
                            className="bg-[#06B6D440]/40 hover:bg-[#06B6D440]/60 duration-300 rounded-2xl p-6 w-full relative shadow-lg shadow-cyan-500/10"
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
                                onClick={() => handleSave(res, "youtube")}
                                className="text-blue-400 absolute right-6 bottom-6 text-xl cursor-pointer"
                            >
                                {savedResources.some((item) => item.id === `youtube-${res.id}`) ? (
                                    <FaBookmark />
                                ) : (
                                    <CiBookmark />
                                )}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-10 p-6 text-white text-center mb-5">
                    <h2 className="text-xl font-bold mb-3">
                        Do you want to contribute your own favorite resource which is not present here?
                    </h2>
                    <p className="mb-4 text-[16px] opacity-90">
                        Help others by sharing what has helped you in your learning journey.
                    </p>
                    <button className="px-6 py-2 rounded-lg font-semibold bg-cyan-500 hover:bg-cyan-600 text-black
                    cursor-pointer">
                        Contribute Your Resource
                    </button>
                </div>
            </div>
        </div>
    );
}