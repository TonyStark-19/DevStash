// import components
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

// import use state and use effect
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// AOS animations
import AOS from 'aos';
import 'aos/dist/aos.css';

// Resource page
export function Resources() {
    return (
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
    )
}

// resouces content
function Content() {
    const [resources, setResources] = useState([]);
    const [loading, setLoading] = useState(true);

    // prettier headings
    const labels = {
        frontend: "Frontend",
        backend: "Backend",
        databases: "Databases",
        programming: "Programming Languages",
        devOps: "Version Control & DevOps",
        cloud: "Cloud & Hosting",
    };

    useEffect(() => {
        fetch("http://localhost:3000/resources") // backend endpoint
            .then((res) => res.json())
            .then((data) => {
                setResources(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    }, []);

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
            <div className="min-a:w-[70%] max-a:w-[80%] max-c:w-[90%] text-center" data-aos="fade-up" data-aos-delay="100">
                <h1 className="min-b:text-5xl max-b:leading-10 max-c:leading-12 max-b:text-[40px] max-d:text-[35px] text-center
                mb-3 font-semibold">Curated Tech & Coding Resources</h1>
                <p className="min-b:text-[22px] max-b:text-[20px] text-center pb-10 border-b-2 border-white/30
                min-b:tracking-wide max-b:tracking-normal">Discover, save, and
                    share top coding tutorials, tools, and guides for developers worldwide.</p>
            </div>

            {Object.entries(resources).map(([categoryKey, items]) => (
                <section key={categoryKey} className="mb-6 mt-20 pb-10 border-b-2 border-white/30 min-a:w-[70%]
                max-a:w-[80%] max-c:w-[90%]">
                    <h2 className="text-3xl font-bold mb-6" data-aos="fade-up" data-aos-delay="200">
                        {labels[categoryKey] || categoryKey} :
                    </h2>

                    <div className="grid min-a:grid-cols-5 max-a:grid-cols-4 max-c:grid-cols-3 max-d:grid-cols-2 gap-6 
                    place-items-center">
                        {items.map((res, i) => (
                            <Link
                                to={`/resources/${res.subcategory}`}
                                key={i}
                                data-aos="fade-up"
                                data-aos-delay="200"
                                className="p-5 bg-white/10 hover:bg-white/15 rounded-2xl flex flex-col items-center gap-3
                                transition cursor-pointer hover:transform hover:scale-105"
                            >
                                <img
                                    src={res.src}
                                    alt={res.alt}
                                    className="w-[150px] h-[100px] object-contain"
                                />
                                <div className="uppercase text-sm font-semibold text-center">
                                    {res.name}
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            ))}

            {/* Call-to-action section */}
            <div className="p-8 text-center max-w-3xl mb-5">
                <h2 className="text-2xl font-bold mb-4">
                    Do you see a missing tech & coding resource?
                </h2>
                <p className="text-lg mb-6">
                    Let us know and we will add it as soon as possible!
                </p>
                <button
                    className="px-6 py-2.5 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-black font-semibold transition
                    cursor-pointer"
                    onClick={() => alert("Feature coming soon!")}
                >
                    Suggest a Resource
                </button>
            </div>
        </div>
    );
}