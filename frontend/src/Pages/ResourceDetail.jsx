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
import api from "../api";

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

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
    const { subcategory } = useParams();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [savedResources, setSavedResources] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    // fetch resources from DB
    useEffect(() => {
        setLoading(true);
        api.get(`/resources/${subcategory}`)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, [subcategory]);

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
            } else {
                await api.post(`/saved-resources/save/${resourceId}`, { type, itemId });
                setSavedResources((prev) => [...prev, { resourceId, type, itemId }]);
            }
        } catch (err) {
            console.error("Error saving/unsaving resource:", err.response?.data || err.message);
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
            alert("Please provide between 2 and 4 tags.");
            return;
        }

        // final data
        const finalData = { ...formData, tags: tagsArray };

        try {
            const res = await api.post(
                `/resources/contribute/${data.category}/${subcategory}`,
                finalData
            );

            // success
            if (res.status === 201) {
                alert("Resource submitted!");

                // Optimistic UI update → append resource locally
                setData((prev) => {
                    const updated = { ...prev };
                    updated.resources[formData.type].push(res.data.resource);
                    return updated;
                });

                setIsOpen(false);
                setFormData({ title: "", description: "", tags: "", link: "", type: "" });
            }
        } catch (err) {
            console.error("Error contributing resource:", err.response?.data || err.message);
            alert("Error contributing resource");
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
                    {subcategory.toUpperCase()} Resources
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
                        <div className="fixed inset-0 flex justify-center items-center"
                            style={{
                                background:
                                    "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000000",
                            }}>
                            <div className="bg-[#06B6D440]/40 py-6 px-8 rounded-xl w-[700px] shadow-xl" data-aos="fade-up">
                                <h3 className="text-3xl mb-8 font-bold text-gray-300">Contribute Resource</h3>
                                <form onSubmit={handleSubmit} className="space-y-3 text-gray-300">
                                    <select
                                        name="type"
                                        className="w-full border border-gray-400 rounded-md p-3 mb-6 bg-transparent"
                                        onChange={handleChange}
                                        value={formData.type}
                                        required
                                    >
                                        <option value="" disabled>Select Type</option>
                                        <option value="docs">Docs / Article</option>
                                        <option value="youtube">YouTube</option>
                                    </select>
                                    <input
                                        type="text"
                                        name="title"
                                        placeholder="Resource Title"
                                        className="w-full border border-gray-400 rounded-md p-3 mb-6 bg-transparent"
                                        onChange={handleChange}
                                        value={formData.title}
                                        required
                                    />
                                    <textarea
                                        name="description"
                                        placeholder="Short Description"
                                        rows={1}
                                        className="w-full border border-gray-400 rounded-md p-3 mb-4 bg-transparent"
                                        onChange={handleChange}
                                        value={formData.description}
                                        required
                                    />
                                    <input
                                        type="text"
                                        name="tags"
                                        placeholder="Tags (comma separated, min 2, max 4)"
                                        className="w-full border border-gray-400 rounded-md p-3 mb-6 bg-transparent"
                                        onChange={handleChange}
                                        value={formData.tags}

                                        required
                                    />
                                    <input
                                        type="url"
                                        name="link"
                                        placeholder="Valid Link to Resource"
                                        className="w-full border border-gray-400 rounded-md p-3 mb-6 bg-transparent"
                                        onChange={handleChange}
                                        value={formData.link}
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="w-full py-2.5 px-4 bg-[#06B6D440]/60 hover:bg-[#06B6D440]/80 
                                        text-gray-300 font-semibold rounded-md cursor-pointer transition mb-6"
                                    >
                                        Submit
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