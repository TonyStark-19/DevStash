// import components
import { Navbar } from "../Components/Navbar";

// Home function
export function Home() {
    return (
        <>
            <div className="h-screen"
                style={{
                    background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000000",
                }}>
                <Navbar />
                <h1 className="text-4xl font-semibold text-white w-[40%]">A website which stashes all tech/coding resources
                    at one place</h1>
            </div>
        </>
    )
}