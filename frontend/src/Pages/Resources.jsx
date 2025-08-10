// Resource page
export function Resources() {
    return (
        <div className="h-screen"
            style={{
                background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000000",
            }}>
            <Content />
        </div>
    )
}

// resouces content
function Content() {
    return (
        <div className="p-8 text-white">
            <h1 className="text-5xl text-center mb-3 font-semibold">Curated Tech & Coding Resources</h1>
            <p className="text-2xl text-center">Discover, save, and share top coding tutorials, tools, and guides for developers
                worldwide.</p>
        </div>
    );
}