// footer component
export function Footer() {
    return (
        <div className="flex flex-col justify-center items-center text-white/80 pb-6 tracking-wide font-poppins">
            <p className="mb-1">© {new Date().getFullYear()} DevStash. All rights reserved.</p>
            <p>Made with ❤️ by Aditya chandel</p>
        </div>
    )
}