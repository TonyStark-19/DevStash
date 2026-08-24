// Background component
export default function Background() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 overflow-hidden"
        >
            {/* Ambient glows */}
            <div className="absolute left-1/2 top-[-15%] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/[0.12] blur-[130px]" />

            <div className="absolute right-[-15%] top-[35%] h-[500px] w-[500px] rounded-full bg-blue-500/[0.07] blur-[140px]" />

            <div className="absolute bottom-[-10%] left-1/2 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/[0.06] blur-[150px]" />

            {/* Subtle developer grid */}
            <div
                className="
                    absolute inset-0
                    bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)]
                    bg-[size:4rem_4rem]
                    [mask-image:radial-gradient(ellipse_70%_55%_at_50%_0%,#000_45%,transparent_100%)]
                "
            />

            {/* Noise texture */}
            <div
                className="absolute inset-0 opacity-[0.025] mix-blend-screen"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter 
                    id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect 
                    width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />
        </div>
    );
}