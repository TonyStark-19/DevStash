// import components
import { Navbar } from "../Components/Navbar";
import { Footer } from "../Components/Footer";

// import use state
import { useState } from "react";

// import components
import ResourceGrid from "../Components/resource/ResourceGrid";

// Resources Page Component
export function Resources() {
    const [loading, setLoading] = useState(true);

    return (
        <div className="min-h-screen bg-[#030712] font-poppins text-slate-200">
            {/* Consistent Background Glow */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-cyan-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/10 blur-[100px] rounded-full" />
            </div>

            {/* navbar */}
            <Navbar />

            {/* Content */}
            <main className="relative z-10">
                <ResourceGrid
                    loading={loading}
                    setLoading={setLoading}
                />
            </main>

            {/* Footer is conditionally rendered based on loading state */}
            {!loading && <Footer />}
        </div>
    );
}