// import components
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

// import useState
import { useState, useEffect } from "react";

// import use params
import { useParams } from "react-router-dom";

// import axios instance
import api from "../utils/api";

// import toast
import toast from "react-hot-toast";

// import components
import ContributeResource from "../Components/resourceDetail/ContributeResource";
import Resources from "../Components/resourceDetail/Resources";

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
                <Resources
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
                <ContributeResource
                    formData={formData}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    setIsOpen={setIsOpen}
                    submitting={submitting}
                />
            )}

            {/* Footer is conditionally rendered based on loading state */}
            {!loading && <Footer />}
        </div>
    );
}