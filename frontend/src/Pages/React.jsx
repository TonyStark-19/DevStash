// resource page
export function React() {
    return (
        <div className="h-screen overflow-hidden"
            style={{
                background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000000",
            }}
        >
            <Content />
        </div>
    )
}

// content
function Content() {
    return (
        <div className="py-8 text-white/80 font-poppins h-full pt-20 flex flex-col items-center">
            <div className="w-[70%]">
                <h1 className="text-4xl text-center mb-3 font-semibold leading-12">React — Your Go-To Hub for Libraries, Tools,
                    and Learning Resources</h1>
                <p className="text-[22px] text-center pb-10 border-b-2 border-white/30 tracking-wide">Everything you
                    need to build modern, fast, and scalable UI with React — from beginner tutorials to advanced libraries.</p>
            </div>
        </div>
    )
}