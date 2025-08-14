// footer component
export function Footer() {
    return(
        <div className="flex flex-col justify-center items-center text-white pb-6">
            <p className="mb-1">© {new Date().getFullYear()} DevStash. All rights reserved.</p>
            <p className="">Made with ❤️ by Aditya chandel</p>
        </div>
    )
}