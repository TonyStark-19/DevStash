// import components
import { Navbar } from "../Components/Navbar";

// saved resources page
export function SavedResources() {
    return (
        <>
            <div className="h-screen overflow-hidden"
                style={{
                    background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000000",
                }}>
                <Navbar />
                <Content />
            </div>
        </>
    )
}

// content
function Content() {
    return (
        <div className="py-8 text-white/80 font-poppins h-full pt-20 flex flex-col items-center">
            <h1 className="text-5xl text-center mb-3 font-semibold pb-10 border-b-2 border-white/30 w-[70%]">Saved Resources</h1>
        </div>
    )
}