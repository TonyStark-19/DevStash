// import components
import { Footer } from "../Components/Footer";

// react icons
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";

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

// resource page
export function ResourceDetail() {
    return (
        <div
            className="min-h-screen"
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
    const { category, subcategory } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [savedResources, setSavedResources] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    // fetch resources from DB
    useEffect(() => {
        setLoading(true);
        api.get(`/resources/${category}/${subcategory}`)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, [category, subcategory]);

    // fetch saved resources on mount
    useEffect(() => {
        const fetchSaved = async () => {
            try {
                const res = await api.get("/saved-resources/saved");
                setSavedResources(res.data); // flat array from backend
            } catch (err) {
                console.error("Error fetching saved resources:", err.response?.data || err.message);
            }
        };
        fetchSaved();
    }, []);

    // handle saving
    const handleSave = async (resourceId, type, itemId) => {
        try {
            const exists = savedResources.some(
                (item) =>
                    item.resourceId === resourceId &&
                    item.type === type &&
                    item.itemId === itemId
            );

            if (exists) {
                await api.post(`/saved-resources/unsave/${resourceId}`, { type, itemId });
                setSavedResources((prev) =>
                    prev.filter(
                        (item) =>
                            !(
                                item.resourceId === resourceId &&
                                item.type === type &&
                                item.itemId === itemId
                            )
                    )
                );
                toast.success("Resource unsaved ❌");
            } else {
                await api.post(`/saved-resources/save/${resourceId}`, { type, itemId });
                setSavedResources((prev) => [...prev, { resourceId, type, itemId }]);
                toast.success("Resource saved ✅");
            }
        } catch (err) {
            console.error("Error saving/unsaving resource:", err.response?.data || err.message);
            toast.error("Error saving/unsaving resource");
        }
    };

    // form data
    const [formData, setFormData] = useState({
        type: "",
        title: "",
        description: "",
        tags: "",
        link: "",
    });

    // handle change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // prepare tags
        const tagsArray = formData.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter((tag) => tag.length > 0);

        // min and max tags
        if (tagsArray.length < 2 || tagsArray.length > 4) {
            toast.error("Please provide between 2 and 4 tags.");
            return;
        }

        // final data
        const finalData = { ...formData, tags: tagsArray };

        try {
            const res = await api.post(
                `/resources/contribute/${category}/${subcategory}`,
                finalData
            );

            // success
            if (res.status === 201) {
                toast.success("Resource submitted 🚀");

                // 🔄 Re-fetch instead of optimistic push
                const refreshed = await api.get(`/resources/${category}/${subcategory}`);
                setData(refreshed.data);

                setIsOpen(false);
                setFormData({ title: "", description: "", tags: "", link: "", type: "" });
            }
        } catch (err) {
            console.error("Error contributing resource:", err.response?.data || err.message);
            toast.error(err.response?.data?.message || "Error contributing resource");
        }
    };

    // AOS animations
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true
        });
    }, []);

    // custom heading for some resources
    const headingMap = {
        "html": "HTML", "css": "CSS", "javascript": "JavaScript", "typescript": "TypeScript", "react": "React",
        "nextjs": "Next JS", "vue": "Vue JS", "nuxtjs": "Nuxt JS", "angular": "Angular JS", "svelte": "Svelte",
        "bootstrap": "Bootstrap CSS", "tailwind": "Tailwind CSS", "materialui": "Material UI",
        "nodejs": "Node JS", "express": "Express JS", "django": "Django", "flask": "Flask", "rubyonrails": "Ruby on rails",
        "laravel": "Laraval", "fastapi": "Fast API",
    }

    const customHeading = headingMap[subcategory] || subcategory;

    // loading
    if (loading) return <div className="h-screen"></div>;
    if (!data) return <p className="text-red-500">No resources found</p>;

    // resources
    const { resources } = data;

    return (
        <div className="py-8 text-white/80 font-poppins h-full pt-20 flex flex-col items-center">
            {/* Page heading */}
            <div className="min-a:w-[70%] max-a:w-[80%] max-c:w-[90%] text-center">
                <h1 className="mb-3 font-semibold leading-12 border-b-2 border-white/30 min-b:text-5xl max-b:text-[40px]
                min-b:pb-10 max-b:pb-5 max-d:text-[35px]"
                    data-aos="fade-up" data-aos-delay="100">
                    {customHeading} Resources
                </h1>
            </div>

            {/* Resources Section */}
            <div className="min-a:w-[70%] max-a:w-[80%] max-c:w-[90%] min-b:mt-15 max-b:mt-0">
                <h2 className="min-c:text-3xl max-c:text-[26px] font-semibold min-b:mt-18 max-b:mt-10 min-c:mb-6 max-c:mb-3"
                    data-aos="fade-up" data-aos-delay="200">Docs & Articles :</h2>

                {/* docs */}
                <div className="flex flex-col gap-10 border-b-2 border-b-white/30 pb-10"
                    data-aos="fade-up" data-aos-delay="200">
                    {resources.docs.map((res, idx) => (
                        <div
                            key={`docs-${res.id || idx}`}
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
                                onClick={() => handleSave(data._id, "docs", res._id)}
                                className="text-blue-400 absolute right-6 bottom-6 text-xl cursor-pointer"
                            >
                                {savedResources.some(
                                    (item) =>
                                        item.resourceId === data._id &&
                                        item.type === "docs" &&
                                        item.itemId === res._id
                                ) ? (
                                    <FaBookmark />
                                ) : (
                                    <CiBookmark />
                                )}
                            </button>
                        </div>
                    ))}
                </div>

                <h2 className="min-c:text-3xl max-c:text-[26px] font-semibold mt-18 min-c:mb-6 max-c:mb-3"
                    data-aos="fade-up" data-aos-delay="100">Youtube Resources :</h2>

                {/* youtube */}
                <div className="flex flex-col gap-10 border-b-2 border-b-white/30 pb-10"
                    data-aos="fade-up" data-aos-delay="200">
                    {resources.youtube.map((res, idx) => (
                        <div
                            key={`youtube-${res.id || idx}`}
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
                                onClick={() => handleSave(data._id, "youtube", res._id)}
                                className="text-blue-400 absolute right-6 bottom-6 text-xl cursor-pointer"
                            >
                                {savedResources.some(
                                    (item) =>
                                        item.resourceId === data._id &&
                                        item.type === "youtube" &&
                                        item.itemId === res._id
                                ) ? (
                                    <FaBookmark />
                                ) : (
                                    <CiBookmark />
                                )}
                            </button>
                        </div>
                    ))}
                </div>

                {/* contribute resource */}
                <div className="mt-10 p-6 text-white text-center mb-5">
                    <h2 className="min-d:text-xl max-d:text-[18px] font-bold mb-3">
                        Do you want to contribute your own favorite resource which is not present here?
                    </h2>
                    <p className="mb-4 min-d:text-[16px] max-d:text-[14px] opacity-90">
                        Help others by sharing what has helped you in your learning journey.
                    </p>
                    <button className="px-6 py-2 rounded-lg font-semibold bg-cyan-500 hover:bg-cyan-600 text-black
                    cursor-pointer min-d:text-[16px] max-d:text-[14px]"
                        onClick={() => setIsOpen(true)}>
                        Contribute Your Resource
                    </button>

                    {isOpen && (
                        <div className="fixed inset-0 flex justify-center items-center bg-black/70 backdrop-blur-sm z-50">
                            <div
                                className="bg-[#0d1b2a] border border-cyan-500/40 rounded-2xl w-[90%] max-w-2xl shadow-2xl
                                relative animate-fadeIn py-8 min-e:px-10 max-e:px-8 max-f:pt-14 max-f:px-5"
                                data-aos="zoom-in"
                            >
                                {/* Close button */}
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl cursor-pointer"
                                >
                                    ✕
                                </button>

                                <h3 className="min-e:text-3xl max-e:text-[25px] min-e:mb-6 max-e:mb-3 font-bold
                                text-cyan-400 text-center">Contribute a Resource 🚀
                                </h3>

                                <p className="text-center text-gray-400 mb-8 max-e:text-[15px]">
                                    Share a useful link, article, or tutorial that has helped you.
                                </p>

                                <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-gray-300">
                                    <select
                                        name="type"
                                        className="col-span-2 border border-gray-600 rounded-lg p-3 bg-transparent
                                        focus:border-cyan-400 focus:ring focus:ring-cyan-500/40 outline-none transition"
                                        onChange={handleChange}
                                        value={formData.type}
                                        required
                                    >
                                        <option value="" disabled>Select Type</option>
                                        <option value="docs">Docs / Article</option>
                                        <option value="youtube">YouTube</option>
                                    </select>

                                    <div className="flex min-e:flex-row max-e:flex-col gap-6">
                                        <input
                                            type="text"
                                            name="title"
                                            placeholder="Resource Title"
                                            className="border border-gray-600 rounded-lg p-3 bg-transparent w-full
                                            focus:border-cyan-400 focus:ring focus:ring-cyan-500/40 outline-none transition"
                                            onChange={handleChange}
                                            value={formData.title}
                                            required
                                        />

                                        <input
                                            type="url"
                                            name="link"
                                            placeholder="Resource Link"
                                            className="border border-gray-600 rounded-lg p-3 bg-transparent w-full
                                            focus:border-cyan-400 focus:ring focus:ring-cyan-500/40 outline-none transition"
                                            onChange={handleChange}
                                            value={formData.link}
                                            required
                                        />
                                    </div>

                                    <textarea
                                        name="description"
                                        placeholder="Short Description"
                                        rows={2}
                                        className="col-span-2 border border-gray-600 rounded-lg p-3 bg-transparent
                                        focus:border-cyan-400 focus:ring focus:ring-cyan-500/40 outline-none transition"
                                        onChange={handleChange}
                                        value={formData.description}
                                        required
                                    />

                                    <input
                                        type="text"
                                        name="tags"
                                        placeholder="Tags (comma separated, min 2, max 4)"
                                        className="col-span-2 border border-gray-600 rounded-lg p-3 bg-transparent
                                        focus:border-cyan-400 focus:ring focus:ring-cyan-500/40 outline-none transition"
                                        onChange={handleChange}
                                        value={formData.tags}
                                        required
                                    />

                                    <button
                                        type="submit"
                                        className="col-span-2 py-3 px-6 bg-cyan-500 hover:bg-cyan-600 text-black
                                        font-semibold rounded-lg cursor-pointer transition transform hover:scale-[1.02]"
                                    >
                                        🚀 Submit Resource
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div>
    );
}