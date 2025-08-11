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

    useEffect(() => {
        fetch("http://localhost:3000/resources")
            .then(res => res.json())
            .then(data => setResources(data));
    }, []);

    return (
        <div className="p-8 text-white font-poppins h-full pt-35 flex flex-col items-center">
            <h1 className="text-5xl text-center mb-4 font-semibold">Curated Tech & Coding Resources</h1>
            <p className="text-2xl text-center">Discover, save, and share top coding tutorials, tools, and guides for developers
                worldwide.</p>

            <div className="flex flex-row flex-wrap justify-center items-center pt-20 gap-5 w-[90%]">
                {resources.map((res, idx) => (
                    <div className="p-5 bg-white/10 hover:bg-white/12 transition rounded-2xl flex flex-col gap-2.5 
                    cursor-pointer" key={idx}>
                        <img src={res.src} className="w-[140px]" alt={res.alt}></img>
                        <div className="uppercase text-[16px] font-semibold text-center">{res.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}