// import components
import { Navbar } from "../Components/Navbar";

// import use state and use effect
import { useState, useEffect } from "react";

// Resource page
export function Resources() {
    return (
        <div className="min-h-screen"
            style={{
                background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000000",
            }}>
            <Navbar />
            <Content />
        </div>
    )
}

// resouces content
function Content() {
    const [resources, setResources] = useState([]);

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
            .then((data) => setResources(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className="p-8 text-white/80 font-poppins h-full pt-15 flex flex-col items-center">
            <h1 className="text-5xl text-center mb-3 font-semibold">Curated Tech & Coding Resources</h1>
            <p className="text-[22px] text-center">Discover, save, and share top coding tutorials, tools, and guides for developers
                worldwide.</p>

            {Object.entries(resources).map(([categoryKey, items]) => (
                <section key={categoryKey} className="mb-8 mt-20 pb-10 border-b-2 border-white/60">
                    <h2 className="text-3xl font-bold mb-6">
                        {labels[categoryKey] || categoryKey} :
                    </h2>

                    <div className="grid grid-cols-5 gap-6 place-items-center">
                        {items.map((res, i) => (
                            <div
                                key={i}
                                className="p-5 bg-white/10 hover:bg-white/20 rounded-2xl flex flex-col items-center gap-3
                                transition cursor-pointer"
                            >
                                <img
                                    src={res.src}
                                    alt={res.alt}
                                    className="w-[150px] h-[100px] object-contain"
                                />
                                <div className="uppercase text-sm font-semibold text-center">
                                    {res.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            ))}

            {/* Call-to-action section */}
            <div className="mt-2 p-8 rounded-xl text-center max-w-3xl">
                <h2 className="text-2xl font-bold mb-4">
                    Do you see a missing tech & coding resource?
                </h2>
                <p className="text-lg mb-6">
                    Let us know and we will add it as soon as possible!
                </p>
                <button
                    className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 rounded-lg text-black font-semibold transition
                    cursor-pointer"
                    onClick={() => alert("Feature coming soon!")}
                >
                    Suggest a Resource
                </button>
            </div>
        </div>
    );
}