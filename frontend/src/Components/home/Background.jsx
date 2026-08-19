// background component
export default function Background() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-cyan-500/20 blur-[120px] rounded-full opacity-50" />
            <div className="absolute top-[35%] -right-40 w-[600px] h-[600px] bg-blue-600/10 blur-[140px] rounded-full" />
            <div className="absolute top-[65%] -left-40 w-[600px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full" />
            <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-500/10 blur-[150px] rounded-full" />

            {/* Cyber/Dev Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            {/* Self-contained SVG Noise Texture */}
            <div
                className="absolute inset-0 opacity-[0.035] mix-blend-screen pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
            />
        </div>
    )
}