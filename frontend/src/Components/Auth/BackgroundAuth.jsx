// background glow component
export default function BackgroundAuth() {
    return (
        <>
            <div className="absolute top-[-10%] right-[-10%] w-[420px] h-[420px] bg-cyan-500/10 blur-[100px] rounded-full" />
            <div className="absolute bottom-[-10%] left-[-10%] w-[420px] h-[420px] bg-blue-600/10 blur-[100px] rounded-full" />
        </>
    )
}